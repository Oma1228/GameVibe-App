const games = [
    {
        name: "Cyberpunk 2077",
        genre: "Action",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
        description: "Futuristic open-world adventure."
    },
    {
        name: "Resident Evil",
        genre: "Horror",
        rating: 9.2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpCn8JYlNlqV9ZDabm3CqV0n-4J8oS9kcOSvudwYV6Q&s=10",
        description: "Survive terrifying experiences."
    },
    {
        name: "Forza Horizon",
        genre: "Racing",
        rating: 9.1,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600",
        description: "Experience exciting racing."
    },
    {
        name: "Minecraft",
        genre: "Adventure",
        rating: 9.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPZlTnbiICEOVa7qm_djlgy_9HqJy57FfInvVKg_P9A&s=10",
        description: "Build and explore new worlds."
    },
    {
        name: "God of War",
        genre: "Action",
        rating: 9.6,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
        description: "Explore an epic fantasy world."
    },
    {
        name: "FIFA",
        genre: "Sports",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600",
        description: "Enjoy competitive football."
    },
    {
        name: "Civilization VI",
        genre: "Strategy",
        rating: 9.0,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
        description: "Build and lead your civilization."
    }
];

function createCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <p>Genre: ${game.genre}</p>
                <div class="rating">
                    ★ ${game.rating}/10
                </div>
            </div>
        </div>
    `;
}

function displayGames(list, elementId) {
    const container = document.getElementById(elementId);

    container.innerHTML = list.length
        ? list.map(createCard).join("")
        : "<p>No matching games found.</p>";
}

function recommendGames() {
    const selectedGenre =
        document.getElementById("genre").value;

    let recommended;

    if (selectedGenre === "All") {
        recommended = [...games].sort(
            (a, b) => b.rating - a.rating
        );
    } else {
        recommended = games.filter(
            game => game.genre === selectedGenre
        );
    }

    displayGames(recommended, "recommendations");
}

displayGames(games, "gameList");
recommendGames();