// Ultimate Apology Experience JavaScript

// Global variables
let currentSection = 'login';
let memories = [
    {
        title: "Our First Meeting 💕",
        description: "The day you walked into my life and everything changed",
        emoji: "🌟"
    },
    {
        title: "First Coffee Date ☕",
        description: "When we talked for hours and I forgot the world existed",
        emoji: "☕"
    },
    {
        title: "Your Cute Laugh 😊",
        description: "The sound that instantly makes my day better",
        emoji: "😄",
        content: `<img src='img1.jpg' alt='A frayed rope runs vertically through the center against a dark textured background. On the left, bold white text reads: NO STORY WITHOUT. On the right, orange text spells R SK, with the missing I replaced by the rope. The emotional tone is motivational and daring, emphasizing the importance of risk in every story.' style='width: 100%; border-radius: 15px;'>`
    },
    {
        title: "Our Inside Jokes 🤭",
        description: "The secret language that only we understand",
        emoji: "🤫"
    }
];

// Initialize the experience
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    setupLoginForm();
    setupActivities();
});

// Create floating hearts animation
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 100);
}

// Login functionality with cute passwords
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.toLowerCase();
        const password = document.getElementById('password').value.toLowerCase();
        
        // Cute password combinations
        const validPasswords = [
            '1', 'forgiveme', 'youaremyworld', 'loveumost',
            'cutegirl', 'myprincess', 'sorrybabe', 'missyou'
        ];
        
        if (username === 'mylove' && validPasswords.includes(password)) {
            showSection('memory-lane');
            startMemoryLane();
        } else {
            showLoginError();
        }
    });
}

// Show login error with cute message
function showLoginError() {
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
        <div style="background: #ffe6e6; padding: 15px; border-radius: 15px; margin: 10px 0;">
            <p>💔 Oops! Try these cute passwords:</p>
            <p><strong>Username:</strong> mylove</p>
            <p><strong>Passwords:</strong> imsorry, forgiveme, youaremyworld</p>
        </div>
    `;
    
    const form = document.getElementById('loginForm');
    form.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Memory lane experience
function startMemoryLane() {
    const memoryContainer = document.getElementById('memoryContainer');
    if (!memoryContainer) return;
    
    memories.forEach((memory, index) => {
        setTimeout(() => {
            const card = createMemoryCard(memory);
            memoryContainer.appendChild(card);
            card.style.animation = 'slideIn 0.5s ease-out';
        }, index * 1000);
    });
    
    setTimeout(() => {
        showSection('activities');
    }, memories.length * 1000 + 2000);
}

// Create memory card
function createMemoryCard(memory) {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML = `
        <h3>${memory.title} ${memory.emoji}</h3>
        <p>${memory.description}</p>
    `;
    return card;
}

// Fun activities section
function setupActivities() {
    const activities = [
        {
            name: "Virtual Hug 🤗",
            action: () => showVirtualHug()
        },
        {
            name: "Love Calculator 💕",
            action: () => showLoveCalculator()
        },
        {
            name: "Apology Song 🎵",
            action: () => playApologySong()
        },
        {
            name: "Cute Compliments 💝",
            action: () => showCompliments()
        },
        {
            name: "Our Future Date 🌈",
            action: () => showFutureDate()
        }
    ];
    
    const activitiesContainer = document.getElementById('activitiesContainer');
    if (!activitiesContainer) return;
    
    activities.forEach(activity => {
        const btn = document.createElement('button');
        btn.className = 'activity-btn';
        btn.textContent = activity.name;
        btn.onclick = activity.action;
        activitiesContainer.appendChild(btn);
    });
}





// Virtual hug animation
function showVirtualHug() {
    const hugDiv = document.createElement('div');
    hugDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: white; padding: 40px; border-radius: 20px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000;">
            <h2>Virtual Hug Sent! 🤗</h2>
            <p>I'm sending you the biggest, warmest hug right now!</p>
            <div style="font-size: 3em; animation: pulse 1s infinite;">🤗</div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="margin-top: 20px; padding: 10px 20px; border-radius: 15px; 
                           background: #ff6f91; color: white; border: none;">
                Close
            </button>
        </div>
    `;
    document.body.appendChild(hugDiv);
}


// Love calculator
function showLoveCalculator() {
    const calculatorDiv = document.createElement('div');
    calculatorDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: white; padding: 40px; border-radius: 20px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000;">
            <h2>Our Love Calculator 💕</h2>
            <p>Calculating how much I love you...</p>
            <div id="loveResult" style="font-size: 2em; color: #ff6f91; margin: 20px 0;">
                0%
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="padding: 10px 20px; border-radius: 15px; 
                           background: #ff6f91; color: white; border: none;">
                Close
            </button>
        </div>
    `;
    document.body.appendChild(calculatorDiv);
    
    // Animate the love percentage
    let percentage = 0;
    const interval = setInterval(() => {
        percentage += Math.random() * 10;
        if (percentage >= 100) {
            percentage = 100;
            clearInterval(interval);
            document.getElementById('how much time i am saying sorry').innerHTML = 
                '10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000%';
        } else {
            document.getElementById('loveResult').textContent = Math.floor(percentage) + '%';
        }
    }, 100);
}

// Apology song
function playApologySong() {
    const songDiv = document.createElement('div');
    songDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: white; padding: 40px; border-radius: 20px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000;">
            <h2>My Apology Song 🎵</h2>
            <div style="background: #f0f0f0; padding: 20px; border-radius: 15px; margin: 20px 0;">
                <p><em>(To the tune of your favorite song)</em></p>
                <p>🎵 "I'm sorry, I'm sorry, I messed up real bad</p>
                <p>But you're the best thing I ever had</p>
                <p>Please forgive me, my beautiful queen</p>
                <p>Without you, my world is mean" 🎵</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="padding: 10px 20px; border-radius: 15px; 
                           background: #ff6f91; color: white; border: none;">
                Close
            </button>
        </div>
    `;
    document.body.appendChild(songDiv);
}

// Cute compliments
function showCompliments() {
    const compliments = [
        "Your smile could light up the entire universe ✨",
        "You're more beautiful than a sunset 🌅",
        "Your eyes are like galaxies I get lost in 👀",
    ];
    
    const complimentDiv = document.createElement('div');
    complimentDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: white; padding: 40px; border-radius: 20px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000; max-height: 80vh; overflow-y: auto;">
            <h2>You're Amazing Because... 💝</h2>
            <div id="complimentList"></div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="margin-top: 20px; padding: 10px 20px; border-radius: 15px; 
                           background: #ff6f91; color: white; border: none;">
                Close
            </button>
        </div>
    `;
    document.body.appendChild(complimentDiv);
    
    const list = document.getElementById('complimentList');
    compliments.forEach((compliment, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.style.cssText = 'background: #ffe6f0; padding: 10px; margin: 5px 0; border-radius: 10px;';
            p.textContent = compliment;
            list.appendChild(p);
        }, index * 500);
    });
}

// Future date planner
function showFutureDate() {
    const dateDiv = document.createElement('div');
    dateDiv.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: white; padding: 40px; border-radius: 20px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000;">
            <h2>Our Magical Future Date 🌈</h2>
            <div style="text-align: left; margin: 20px 0;">
                <h3>🌅 Evening:</h3>
                <p>Sunset picnic with your favorite foods</p>
                
                <h3>✨ Night:</h3>
                <p>Stargazing while holding hands and making wishes</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="padding: 10px 20px; border-radius: 15px; 
                           background: #ff6f91; color: white; border: none;">
                Sounds Perfect!
            </button>
        </div>
    `;
    document.body.appendChild(dateDiv);
}

// Utility functions
function showSection(sectionId) {
    const sections = ['login-section', 'memory-lane', 'activities'];
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = id === sectionId ? 'block' : 'none';
        }
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
