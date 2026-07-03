package com.carrental.carservice.service;

import com.carrental.carservice.entity.Car;
import com.carrental.carservice.repository.CarRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@Service
public class AiChatService {

    private final CarRepository carRepository;
    private final ObjectMapper objectMapper;
    private final RestClient restClient;
    private final String apiKey;
    private final String model;

    public AiChatService(
            CarRepository carRepository,
            ObjectMapper objectMapper,
            @Value("${openai.api-key:}") String apiKey,
            @Value("${openai.model:gpt-4.1}") String model) {

        this.carRepository = carRepository;
        this.objectMapper = objectMapper;
        this.apiKey = apiKey;
        this.model = model;
        this.restClient = RestClient.builder()
                .baseUrl("https://api.openai.com/v1")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, "application/json")
                .build();
    }

    public String answer(String question) {
        if (apiKey == null || apiKey.isBlank()) {
            return "L API IA n est pas configuree. Ajoutez OPENAI_API_KEY dans Docker, puis redemarrez le projet.";
        }

        List<Car> cars = carRepository.findAll();
        String carsContext = buildCarsContext(cars);

        String instructions = """
                Vous etes l assistant IA de CARSOLYSE RentCar.
                Repondez en francais simple, naturel et utile.
                Basez-vous uniquement sur les voitures donnees dans la base.
                Si une voiture demandee existe mais n est pas disponible, dites clairement qu elle n est pas disponible et proposez des alternatives disponibles.
                Si le client demande un conseil, choisissez selon disponibilite, budget, places, transmission, carburant et prix.
                Ne dites jamais que vous ne connaissez pas les voitures si la liste contient des voitures.
                Reponse courte: 2 a 5 phrases maximum.
                """;

        String input = """
                Question client:
                %s

                Voitures dans la base:
                %s
                """.formatted(question, carsContext);

        Map<String, Object> request = Map.of(
                "model", model,
                "instructions", instructions,
                "input", input
        );

        try {
            JsonNode response = restClient.post()
                    .uri("/responses")
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                    .body(request)
                    .retrieve()
                    .body(JsonNode.class);

            String answer = extractText(response);
            return answer == null || answer.isBlank()
                    ? "Je n ai pas pu generer une reponse IA maintenant."
                    : answer;
        } catch (Exception ex) {
            return "L API IA ne repond pas maintenant. Verifiez OPENAI_API_KEY, internet et le modele configure.";
        }
    }

    private String buildCarsContext(List<Car> cars) {
        if (cars.isEmpty()) {
            return "Aucune voiture dans la base.";
        }

        StringBuilder builder = new StringBuilder();
        for (Car car : cars) {
            builder.append("- id=").append(car.getId())
                    .append(", nom=").append(car.getBrand()).append(" ").append(car.getModel())
                    .append(", disponible=").append(Boolean.TRUE.equals(car.getAvailable()) ? "oui" : "non")
                    .append(", prix=").append(car.getPricePerDay()).append(" DT/jour")
                    .append(", places=").append(car.getSeats())
                    .append(", transmission=").append(car.getTransmission())
                    .append(", carburant=").append(car.getFuelType())
                    .append(", description=").append(car.getDescription())
                    .append('\n');
        }
        return builder.toString();
    }

    private String extractText(JsonNode response) {
        if (response == null) {
            return null;
        }

        JsonNode outputText = response.get("output_text");
        if (outputText != null && outputText.isTextual()) {
            return outputText.asText();
        }

        JsonNode output = response.get("output");
        if (output != null && output.isArray()) {
            for (JsonNode item : output) {
                JsonNode content = item.get("content");
                if (content != null && content.isArray()) {
                    for (JsonNode part : content) {
                        JsonNode text = part.get("text");
                        if (text != null && text.isTextual()) {
                            return text.asText();
                        }
                    }
                }
            }
        }

        return null;
    }
}
