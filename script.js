{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyOp8PG6ay284DLHJa9UzeLc",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/nahuerojo/Airport-game/blob/main/script.js\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "Pgcs4Gb8i-cc"
      },
      "outputs": [],
      "source": [
        "// Elementos del DOM\n",
        "const gameModeScreen = document.getElementById(\"game-mode\");\n",
        "const gameScreen = document.getElementById(\"game-screen\");\n",
        "const learnBtn = document.getElementById(\"learn-mode\");\n",
        "const quizBtn = document.getElementById(\"quiz-mode\");\n",
        "const questionEl = document.getElementById(\"question\");\n",
        "const optionsEl = document.getElementById(\"options\");\n",
        "const scoreEl = document.getElementById(\"points\");\n",
        "const timerEl = document.getElementById(\"timer\");\n",
        "\n",
        "// Variables del juego\n",
        "let score = 0;\n",
        "let timeLeft = 60;\n",
        "let timer;\n",
        "let currentAirport;\n",
        "\n",
        "// Iniciar juego\n",
        "learnBtn.addEventListener(\"click\", () => startGame(\"learn\"));\n",
        "quizBtn.addEventListener(\"click\", () => startGame(\"quiz\"));\n",
        "\n",
        "function startGame(mode) {\n",
        "    gameModeScreen.classList.add(\"hidden\");\n",
        "    gameScreen.classList.remove(\"hidden\");\n",
        "    if (mode === \"quiz\") {\n",
        "        timerEl.classList.remove(\"hidden\");\n",
        "        startTimer();\n",
        "    }\n",
        "    nextQuestion();\n",
        "}\n",
        "\n",
        "function nextQuestion() {\n",
        "    // Elige un aeropuerto aleatorio\n",
        "    currentAirport = airports[Math.floor(Math.random() * airports.length)];\n",
        "    questionEl.innerHTML = `¿Código de <span id=\"airport-name\">${currentAirport.name} (${currentAirport.country})</span>?`;\n",
        "\n",
        "    // Genera 3 opciones (1 correcta + 2 aleatorias)\n",
        "    const options = [currentAirport.code];\n",
        "    while (options.length < 3) {\n",
        "        const randomCode = airports[Math.floor(Math.random() * airports.length)].code;\n",
        "        if (!options.includes(randomCode)) options.push(randomCode);\n",
        "    }\n",
        "    options.sort(() => Math.random() - 0.5); // Mezcla las opciones\n",
        "\n",
        "    // Crea botones de opciones\n",
        "    optionsEl.innerHTML = \"\";\n",
        "    options.forEach(code => {\n",
        "        const btn = document.createElement(\"button\");\n",
        "        btn.className = \"option-btn\";\n",
        "        btn.textContent = code;\n",
        "        btn.addEventListener(\"click\", () => checkAnswer(code));\n",
        "        optionsEl.appendChild(btn);\n",
        "    });\n",
        "}\n",
        "\n",
        "function checkAnswer(selectedCode) {\n",
        "    if (selectedCode === currentAirport.code) {\n",
        "        score++;\n",
        "        scoreEl.textContent = score;\n",
        "        alert(\"¡Correcto! 🎉\");\n",
        "    } else {\n",
        "        alert(`Incorrecto. El código es ${currentAirport.code}.`);\n",
        "    }\n",
        "    nextQuestion();\n",
        "}\n",
        "\n",
        "function startTimer() {\n",
        "    timer = setInterval(() => {\n",
        "        timeLeft--;\n",
        "        document.getElementById(\"time\").textContent = timeLeft;\n",
        "        if (timeLeft <= 0) {\n",
        "            clearInterval(timer);\n",
        "            alert(`¡Tiempo terminado! Puntuación final: ${score}`);\n",
        "            resetGame();\n",
        "        }\n",
        "    }, 1000);\n",
        "}\n",
        "\n",
        "function resetGame() {\n",
        "    score = 0;\n",
        "    timeLeft = 60;\n",
        "    clearInterval(timer);\n",
        "    scoreEl.textContent = \"0\";\n",
        "    timerEl.classList.add(\"hidden\");\n",
        "    gameScreen.classList.add(\"hidden\");\n",
        "    gameModeScreen.classList.remove(\"hidden\");\n",
        "}"
      ]
    }
  ]
}