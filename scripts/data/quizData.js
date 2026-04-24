export const characters = [
    { name: "Mordecai", description: "Você é responsável, um bom amigo e mulheres te deixam confuso.", image: "images/mordecai.png" },
    { name: "Rigby", description: "Impulsivo, pouco pensante, e terrível em jogos. Mas quando um amigo precisa, sempre se presta a ajudar além de ser um bom marido.", image: "images/rigby.jpg" },
    { name: "Benson", description: "Você é muito rigoroso, tenta manter controle da situação de um modo agressivo, mas sempre pensando no bem estar dos companheiros.", image: "images/benson.jpg" },
    { name: "Pops", description: "Você é gentil, otimista e vê o mundo com muita leveza. E usa pirulitos como dinheiro.", image: "images/pops.jpeg" },
    { name: "Skips", description: "Você é sábio, já viveu muito e é experiente. Nunca revela suas principais capacidade. sempre sabe o que fazer.", image: "images/skips.jpeg" },
    { name: "Muscle Man", description: "Você é maluco. Mas é um excelente amigo, faz de tudo para provar seu ponto.", image: "images/muscleman.jpg" }
];

export const questions = [
    {
        text: "É sexta a noite e você tem o dia livre amanhã. O que você faz?",
        options: [
            { text: "Tentar destruir o universo por um queijo quente", points: [3, 3, 1, 2, 1, 2] },
            { text: "Descansar e seguir a rotina normal", points: [1, 1, 3, 2, 3, 1] },
            { text: "Organizar alguma atividade para o grupo todo", points: [2, 1, 2, 3, 2, 3] }
        ]
    },
    {
        text: "Alguém designa você a fazer uma tarefa insuportável. Como você reage?",
        options: [
            { text: "Reclama um pouco, mas acaba fazendo", points: [3, 2, 1, 2, 2, 2] },
            { text: "Tenta escapar e empurra para o amigo", points: [1, 3, 1, 1, 1, 2] },
            { text: "Faz na hora sem questionar", points: [2, 1, 3, 3, 3, 1] }
        ]
    },
    {
        text: "Um olho gigante aparece em um torneio de não piscar. Qual sua reação?",
        options: [
            { text: "Fica animado e quer investigar", points: [3, 3, 1, 3, 2, 2] },
            { text: "Entra em pânico e grita com todos", points: [1, 2, 3, 1, 1, 3] },
            { text: "Mantém a calma e tenta resolver", points: [2, 1, 2, 2, 3, 1] }
        ]
    },
    {
        text: "Como você age quando seu melhor amigo comete um erro grave?",
        options: [
            { text: "Conversa com calma e tenta ajudar a consertar", points: [3, 1, 2, 3, 3, 2] },
            { text: "Fica bravo mas logo perdoa", points: [2, 2, 3, 2, 1, 3] },
            { text: "Topa qualquer plano mirabolante para consertar", points: [1, 3, 1, 1, 2, 1] }
        ]
    },
    {
        text: "Qual dessas atividades mais combina com você?",
        options: [
            { text: "Se divertir por meio eletrônicos", points: [3, 3, 1, 2, 1, 1] },
            { text: "Atividades físicas", points: [1, 1, 2, 1, 3, 3] },
            { text: "Passear, ouvir música e relaxar", points: [2, 2, 2, 3, 2, 2] }
        ]
    },
    {
        text: "O que seus amigos diriam que é seu maior defeito?",
        options: [
            { text: "Que você pensa demais e enrola para tomar decisões", points: [3, 1, 1, 2, 2, 1] },
            { text: "Que você é preguiçoso e irresponsável", points: [1, 3, 1, 1, 1, 2] },
            { text: "Que você estressa demais por coisas pequenas", points: [2, 2, 3, 1, 2, 3] }
        ]
    },
    {
        text: "Um plano completamente absurdo pode resolver um problema sério. Você topa?",
        options: [
            { text: "Sim, mas fica nervoso durante tudo", points: [3, 2, 1, 2, 2, 2] },
            { text: "Sim, sem pensar duas vezes", points: [2, 3, 1, 3, 1, 3] },
            { text: "Prefere buscar uma solução mais segura primeiro", points: [1, 1, 3, 1, 3, 1] }
        ]
    },
    {
        text: "Como você se comporta em uma festa?",
        options: [
            { text: "Fica num canto conversando com os amigos próximos", points: [3, 1, 2, 2, 3, 1] },
            { text: "É a alma da festa, barulhento e animado", points: [1, 3, 1, 2, 1, 3] },
            { text: "Circula por todo mundo, educado e simpático", points: [2, 2, 2, 3, 2, 2] }
        ]
    },
    {
        text: "O que te motiva a acordar todo dia?",
        options: [
            { text: "Os amigos e as aventuras que podem acontecer", points: [3, 3, 1, 3, 2, 3] },
            { text: "A responsabilidade e o dever cumprido", points: [2, 1, 3, 2, 3, 1] },
            { text: "A esperança de que o dia vai ser incrível", points: [1, 2, 1, 3, 1, 2] }
        ]
    },
    {
        text: "Como você lida com uma derrota ou fracasso?",
        options: [
            { text: "Fica mal, mas aprende com o erro e tenta de novo", points: [3, 2, 2, 2, 3, 2] },
            { text: "Bota a culpa nos outros antes de aceitar", points: [1, 3, 2, 1, 1, 3] },
            { text: "Explode na hora mas logo esquece e segue em frente", points: [2, 1, 3, 1, 2, 1] }
        ]
    }
];