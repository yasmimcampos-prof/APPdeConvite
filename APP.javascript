```java
import javafx.animation.*;
import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.stage.Stage;
import javafx.util.Duration;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Random;

public class Main extends Application {

    private final Random random = new Random();

    private Stage stage;
    private StackPane root;

    private final String[] frases = {
            "NÃO 😭",
            "Tem certeza? 🥺",
            "Pensa melhor!",
            "Não faz isso comigo 😭",
            "Sério mesmo?",
            "Olha o SIM ali 👀",
            "Você não pode clicar aqui 😂",
            "Desiste do NÃO!",
            "EU VOU CONTINUAR FUGINDO 😭"
    };

    private int tentativas = 0;

    @Override
    public void start(Stage primaryStage) {

        stage = primaryStage;

        root = new StackPane();

        mostrarTelaInicial();

        Scene scene = new Scene(root, 700, 600);

        stage.setTitle("Um convite para você ❤️");
        stage.setScene(scene);
        stage.show();
    }


    // =====================================================
    // TELA INICIAL
    // =====================================================

    private void mostrarTelaInicial() {

        root.getChildren().clear();

        VBox caixa = criarCaixa();

        Label coracao = new Label("💌");
        coracao.setFont(Font.font(70));

        Label titulo = new Label("Quer sair comigo?");
        titulo.setFont(Font.font("Arial", 42));
        titulo.setTextFill(Color.WHITE);

        Label mensagem = new Label(
                "Tenho uma proposta muito importante para fazer...\n" +
                "e prometo que você vai gostar. 👀❤️"
        );

        mensagem.setFont(Font.font("Arial", 18));
        mensagem.setTextFill(Color.WHITE);
        mensagem.setAlignment(Pos.CENTER);

        Button sim = new Button("SIM ❤️");
        Button nao = new Button("NÃO 😭");

        estilizarBotaoSim(sim);
        estilizarBotaoNao(nao);

        sim.setOnAction(event -> mostrarCalendario());

        nao.setOnMouseEntered(event -> fugirDoBotao(nao));

        nao.setOnAction(event -> fugirDoBotao(nao));

        HBox botoes = new HBox(20, sim, nao);
        botoes.setAlignment(Pos.CENTER);

        caixa.getChildren().addAll(
                coracao,
                titulo,
                mensagem,
                botoes
        );

        root.getChildren().add(caixa);
```
