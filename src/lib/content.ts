export const SITE_NAME = "Furo de Roteiro";
export const SITE_SLOGAN = "Nenhum roteiro é perfeito. Nem esta opinião.";

export type Verdict = "Vale o ingresso" | "Espera o streaming" | "Só se estiver sem opção" | "Nem de graça";
export type SpoilerLevel = "Leve" | "Médio" | "Vou contar tudo";

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  rating: number;
  verdict: Verdict;
  holes: number;
  spoiler: SpoilerLevel;
  excerpt: string;
  image: string;
  readTime: number;
  tags: string[];
  originalTitle: string;
  year: number;
  creator: string;
  cast: string;
  whereToWatch: string;
  content: string[];
};

export const categories = ["Filmes", "Séries", "Música", "Games", "Quadrinhos", "Animes", "Notícias", "Opinião"];

export const posts: Post[] = [
  {
    slug: "quarteto-fantastico-vale-o-ingresso",
    title: "O Quarteto Fantástico finalmente encontrou seu tom — e eu tenho algumas perguntas",
    category: "Filmes",
    date: "06 out 2026",
    rating: 4.5,
    verdict: "Vale o ingresso",
    holes: 3,
    spoiler: "Médio",
    excerpt: "Família, retrofuturismo e uma quantidade suspeita de decisões que pedem uma segunda reunião de roteiro.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85",
    readTime: 7,
    tags: ["Marvel", "Fantasia", "Super-heróis"],
    originalTitle: "The Fantastic Four",
    year: 2026,
    creator: "Matt Shakman",
    cast: "Elenco principal fictício para demonstração",
    whereToWatch: "Cinema",
    content: [
      "Existe uma arte em fazer um blockbuster parecer divertido sem parecer que ele está desesperado para ser divertido. Este acerta bastante.",
      "O filme entende que super-heróis funcionam melhor quando existe uma família por trás do uniforme. O problema é que, de vez em quando, o roteiro resolve abrir um buraco do tamanho de uma nave espacial.",
      "Ainda assim, saí do cinema com aquela sensação rara de ter visto algo que sabe o que quer ser. E isso, convenhamos, já merece aplausos.",
      "Meu veredito? Vale o ingresso. Leve a pipoca e deixe três neurônios reservados para ignorar os furos."
    ]
  },
  {
    slug: "the-last-of-us-segunda-temporada",
    title: "The Last of Us: quando o silêncio diz mais que o apocalipse",
    category: "Séries",
    date: "29 set 2026",
    rating: 4,
    verdict: "Vale o ingresso",
    holes: 1,
    spoiler: "Médio",
    excerpt: "Uma temporada mais amarga, mais paciente e perigosamente boa em fazer a gente discutir decisões de personagens.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85",
    readTime: 8,
    tags: ["HBO", "Drama", "Apocalipse"],
    originalTitle: "The Last of Us",
    year: 2026,
    creator: "Craig Mazin e Neil Druckmann",
    cast: "Elenco principal — demonstração",
    whereToWatch: "Streaming",
    content: [
      "Tem série que faz barulho. The Last of Us prefere fazer aquele silêncio desconfortável que deixa você olhando para a tela como quem acabou de receber uma mensagem de 'precisamos conversar'.",
      "A temporada pisa no freio quando poderia acelerar e, justamente por isso, encontra seus melhores momentos.",
      "Há decisões questionáveis? Claro. Este site não se chama Furo de Roteiro por decoração."
    ]
  },
  {
    slug: "o-retorno-do-vinil",
    title: "O vinil voltou. A lógica dos preços, aparentemente, não.",
    category: "Música",
    date: "21 set 2026",
    rating: 3.5,
    verdict: "Espera o streaming",
    holes: 0,
    spoiler: "Leve",
    excerpt: "Uma defesa apaixonada do ritual de ouvir música — com uma pequena reclamação sobre pagar caro pelo mesmo álbum.",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1400&q=85",
    readTime: 5,
    tags: ["Vinil", "Música", "Nostalgia"],
    originalTitle: "—",
    year: 2026,
    creator: "Furo de Roteiro",
    cast: "—",
    whereToWatch: "Na sua vitrola",
    content: [
      "O vinil não é só mídia. É um pequeno ritual doméstico que transforma apertar play em um evento.",
      "Mas existe um ponto em que nostalgia vira taxa de conveniência. E algumas edições parecem cobrar pelo encarte como se ele viesse assinado pelo David Bowie."
    ]
  },
  {
    slug: "o-hype-de-um-jogo-que-nao-existe",
    title: "Culpados pelo Hype: 5 jogos que a internet transformou em religião",
    category: "Games",
    date: "14 set 2026",
    rating: 3,
    verdict: "Só se estiver sem opção",
    holes: 5,
    spoiler: "Leve",
    excerpt: "Rankings absolutamente científicos, medidos em empolgação, memes e quantidade de gente dizendo 'você precisa jogar'.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=85",
    readTime: 6,
    tags: ["Games", "Ranking", "Hype"],
    originalTitle: "—",
    year: 2026,
    creator: "Furo de Roteiro",
    cast: "—",
    whereToWatch: "Console ou PC",
    content: [
      "Hype é uma criatura curiosa: cresce quando ninguém está jogando e desaparece quando todo mundo finalmente joga.",
      "A lista de hoje não é uma sentença. É só a minha humilde tentativa de causar discórdia antes do almoço."
    ]
  }
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
export const getCategoryPosts = (slug: string) => posts.filter((post) => post.category.toLowerCase() === decodeURIComponent(slug).toLowerCase());
