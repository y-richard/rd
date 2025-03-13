import json

# Nome do arquivo onde o contador será salvo
FILENAME = "contador.json"

def carregar_contador():
    """Carrega o contador do arquivo ou retorna 0 se não existir."""
    try:
        with open(FILENAME, "r") as file:
            data = json.load(file)
            return data.get("contador", 0)
    except (FileNotFoundError, json.JSONDecodeError):
        return 0

def salvar_contador(valor):
    """Salva o valor do contador no arquivo."""
    with open(FILENAME, "w") as file:
        json.dump({"contador": valor}, file)

def main():
    contador = carregar_contador()
    print(f"Contador atual: {contador}")
    contador += 1
    salvar_contador(contador)
    print(f"Novo valor do contador: {contador}")

if __name__ == "__main__":
    main()
