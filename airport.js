{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyOc9mEndzrXnDIzItnQTKxF",
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
        "<a href=\"https://colab.research.google.com/github/nahuerojo/Airport-game/blob/main/airport.js\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "ibXuEW9NiqCY"
      },
      "outputs": [],
      "source": [
        "const airports = [\n",
        "    // Asia\n",
        "    { name: \"Shanghai Pudong\", country: \"China\", code: \"PVG\" },\n",
        "    { name: \"Tokyo Haneda\", country: \"Japan\", code: \"HND\" },\n",
        "    { name: \"Tokyo Narita\", country: \"Japan\", code: \"NRT\" },\n",
        "    { name: \"Seoul Incheon\", country: \"South Korea\", code: \"ICN\" },\n",
        "\n",
        "    // Canadá\n",
        "    { name: \"Calgary\", country: \"Canada\", code: \"YYC\" },\n",
        "    { name: \"Vancouver\", country: \"Canada\", code: \"YVR\" },\n",
        "    { name: \"Halifax\", country: \"Canada\", code: \"YHZ\" },\n",
        "    { name: \"Toronto\", country: \"Canada\", code: \"YYZ\" },\n",
        "    { name: \"Montreal\", country: \"Canada\", code: \"YUL\" },\n",
        "    { name: \"Quebec City\", country: \"Canada\", code: \"YQB\" },\n",
        "\n",
        "    // Caribe\n",
        "    { name: \"Anguilla\", country: \"Anguilla\", code: \"AXA\" },\n",
        "    { name: \"Antigua\", country: \"Antigua & Barbuda\", code: \"ANU\" },\n",
        "    { name: \"Aruba\", country: \"Aruba\", code: \"AUA\" },\n",
        "    { name: \"Freeport\", country: \"The Bahamas\", code: \"FPO\" },\n",
        "    { name: \"Nassau\", country: \"The Bahamas\", code: \"NAS\" },\n",
        "    { name: \"Bridgetown\", country: \"Barbados\", code: \"BGI\" },\n",
        "    { name: \"Bermuda\", country: \"Bermuda\", code: \"BDA\" },\n",
        "    { name: \"Bonaire\", country: \"Bonaire\", code: \"BON\" },\n",
        "    { name: \"Tortola\", country: \"British Virgin Islands\", code: \"EIS\" },\n",
        "    { name: \"Grand Cayman\", country: \"Cayman Islands\", code: \"GCM\" },\n",
        "    { name: \"Havana\", country: \"Cuba\", code: \"HAV\" },\n",
        "    { name: \"Punta Cana\", country: \"Dominican Republic\", code: \"PUJ\" },\n",
        "    { name: \"Santo Domingo\", country: \"Dominican Republic\", code: \"SDQ\" },\n",
        "    { name: \"Montego Bay\", country: \"Jamaica\", code: \"MBJ\" },\n",
        "    { name: \"San Juan\", country: \"Puerto Rico\", code: \"SJU\" },\n",
        "    { name: \"St Maarten\", country: \"Sint Maarten\", code: \"SXM\" },\n",
        "\n",
        "    // Europa\n",
        "    { name: \"Paris - Charles de Gaulle\", country: \"France\", code: \"CDG\" },\n",
        "    { name: \"Frankfurt\", country: \"Germany\", code: \"FRA\" },\n",
        "    { name: \"Athens\", country: \"Greece\", code: \"ATH\" },\n",
        "    { name: \"Rome - Leonardo da Vinci-Fiumicino\", country: \"Italy\", code: \"FCO\" },\n",
        "    { name: \"Amsterdam\", country: \"Netherlands\", code: \"AMS\" },\n",
        "    { name: \"London - Heathrow\", country: \"United Kingdom\", code: \"LHR\" },\n",
        "\n",
        "    // México\n",
        "    { name: \"Cancun\", country: \"Mexico\", code: \"CUN\" },\n",
        "    { name: \"Guadalajara\", country: \"Mexico\", code: \"GDL\" },\n",
        "    { name: \"Mexico City\", country: \"Mexico\", code: \"MEX\" },\n",
        "    { name: \"Monterrey\", country: \"Mexico\", code: \"MTY\" },\n",
        "\n",
        "    // Estados Unidos (ejemplos)\n",
        "    { name: \"New York Kennedy\", country: \"USA\", code: \"JFK\" },\n",
        "    { name: \"Los Angeles\", country: \"USA\", code: \"LAX\" },\n",
        "    { name: \"Chicago O'Hare\", country: \"USA\", code: \"ORD\" },\n",
        "    { name: \"Miami\", country: \"USA\", code: \"MIA\" },\n",
        "\n",
        "    // ... (Continúa con los demás países/regiones del PDF)\n",
        "    // ¡Total: ~200 aeropuertos!\n",
        "];\n",
        "\n",
        "// Ejemplo de uso en tu juego:\n",
        "function getRandomAirport() {\n",
        "    return airports[Math.floor(Math.random() * airports.length)];\n",
        "}"
      ]
    }
  ]
}