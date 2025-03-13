FILENAME = "contador.txt"

def carregar_contador():
    try:
        with open(FILENAME, "r") as file:
            return int(file.read().strip())
    except (FileNotFoundError, ValueError):
        return 0

def salvar_contador(valor):
    with open(FILENAME, "w") as file:
        file.write(str(valor))

def main():
    contador = carregar_contador()
    print(f"Contador atual: {contador}")
    contador += 1
    salvar_contador(contador)
    print(f"Novo valor do contador: {contador}")

if __name__ == "__main__":
    main()
    
