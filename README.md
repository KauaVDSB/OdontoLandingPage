# 🦷 HB Odonto – Landing Page Institucional


> Landing page institucional para a clínica odontológica fictícia **HB Odonto**, desenvolvida como parte de um processo seletivo técnico. O projeto foi cuidadosamente construído com foco em design elegante, acessibilidade, modularização e boas práticas de desenvolvimento front-end e back-end (com Flask).

---

## ✨ Principais Funcionalidades

- ⚙️ Estrutura modular com Flask (backend leve)
- 🎨 Interface refinada e moderna com foco em estética e legibilidade
- 📱 **Design responsivo (desktop-first)**, adaptado para todos os dispositivos
- 🌐 Deploy gratuito via [Vercel](https://landing-page-odonto-plum.vercel.app)
- 💬 Seções funcionais: Hero, Sobre, Serviços, Equipe, Contato e Footer
- 🧠 Acessibilidade e semântica HTML respeitadas
- 🧩 CSS organizado por escopos (base, landing e responsivo)
- 🔄 Carrossel animado para apresentação da equipe
- 💡 Animações com Intersection Observer para efeito suave de entrada

---

## 🚀 Acesse o Projeto Online

🔗 **[Clique aqui para visualizar o site em produção](https://landing-page-odonto-plum.vercel.app)**

---


## 🗂 Estrutura de Pastas

A seguir, a estrutura resumida do projeto:

. ├── odonto/ │ ├── static/ │ │ ├── css/ │ │ │ ├── base/ (e base/responsivo) │ │ │ └── landing/ (e landing/responsivo) │ │ ├── media/ (icones + imagens) │ │ └── script/ │ │ ├── components/ │ │ └── utils/ │ ├── templates/ │ │ ├── base/ │ │ └── landing/ │ ├── routes.py │ └── init.py ├── main.py ├── requirements.txt ├── vercel.json └── .flaskenv



> Detalhamento completo no arquivo [`estrutura.txt`](estrutura.txt)

---

## 🛠️ Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

2. Crie e ative um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate    # Linux/macOS
venv\Scripts\activate       # Windows
```

3. Instale as dependências:

```bash
pip install -r requirements.txt
```

4. Rode a aplicação:

```bash
flask run
```
O site estará disponível em http://127.0.0.1:5000
(O arquivo .flaskenv já aponta para o main.py, então o flask run funcionará direto.)

---

## 💻 Tecnologias Utilizadas

- Python + Flask

- HTML5 Semântico

- CSS3 Modularizado

- JavaScript (Vanilla)

- Bootstrap Icons

- Intersection Observer API

- Vercel (Deploy)

---

## 📸 Imagens do Projeto

![Desktop Screenshot](https://github.com/user-attachments/assets/6bb0c835-dcb7-4c1f-aa1a-b9c1de931d63)
![Mobile Screenshot](https://github.com/user-attachments/assets/4dc99193-c3e6-4141-bda9-2cc91210b8d3)

---

## 📚 Aprendizados e Estratégias
Este projeto foi desenvolvido com abordagem Desktop-first, priorizando o layout ideal em telas maiores, com posterior adaptação minuciosa para responsividade mobile, garantindo fluidez e performance em todas as resoluções.

Além disso, busquei aplicar:


- Separação clara de responsabilidades entre HTML/CSS/JS

- Estrutura de pastas que facilita manutenção e escalabilidade

- Modularização tanto nos templates Flask quanto no CSS

- Deploy contínuo com vercel.json configurado


## 📇 Contato & Portfólio
📧 Seu Email: kauavdsb.jobs@email.com
🔗 LinkedIn (https://www.linkedin.com/in/kauã-vinicius-dos-santos-barbosa-346b31344)
💼 Portfólio - Em breve
🐱 GitHub (https://github.com/KauaVDSB/)

## 🎯 Projeto desenvolvido com atenção a cada detalhe. Obrigado por visitar!
