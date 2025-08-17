// Enhanced Cute Message Box System
class CuteMessageBox {
    constructor() {
        this.init();
    }

    init() {
        this.createStyles();
    }

    createStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .cute-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
                backdrop-filter: blur(5px);
            }

            .cute-message-container {
                background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffeaa7 100%);
                border-radius: 30px;
                padding: 40px;
                max-width: 450px;
                width: 90%;
                text-align: center;
                box-shadow: 0 15px 35px rgba(255, 107, 129, 0.3);
                animation: bounceIn 0.5s ease;
                position: relative;
                border: 3px solid #fff;
            }

            .cute-message-container::before {
                content: '';
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                background: linear-gradient(45deg, #ff6b81, #ff9ff3, #feca57, #ff6b81);
                border-radius: 35px;
                z-index: -1;
                animation: rotate 3s linear infinite;
            }

            .cute-title {
                font-size: 28px;
                font-weight: bold;
                color: #d63384;
                margin-bottom: 20px;
                text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
                animation: wiggle 2s ease-in-out infinite;
            }

            .cute-content {
                font-size: 18px;
                color: #6f42c1;
                margin-bottom: 25px;
                line-height: 1.6;
            }

            .cute-emoji {
                font-size: 3em;
                margin: 15px 0;
                animation: bounce 1s infinite;
            }

            .cute-button {
                background: linear-gradient(135deg, #ff6b91, #ff8e8e);
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 5px 15px rgba(255, 107, 145, 0.4);
            }

            .cute-button:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(255, 107, 145, 0.6);
            }

            .cute-hearts {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                pointer-events: none;
                border-radius: 30px;
            }

            .floating-heart {
                position: absolute;
                font-size: 20px;
                animation: floatUp 3s ease-in-out infinite;
            }

            .compliment-item {
                background: rgba(255, 255, 255, 0.7);
                margin: 10px 0;
                padding: 15px;
                border-radius: 15px;
                animation: slideInLeft 0.5s ease;
                border-left: 4px solid #ff6b91;
            }

            .date-section {
                background: rgba(255, 255, 255, 0.8);
                margin: 15px 0;
                padding: 20px;
                border-radius: 20px;
                text-align: left;
            }

            .date-section h3 {
                color: #d63384;
                margin-bottom: 10px;
                font-size: 20px;
            }

            .date-section p {
                color: #6f42c1;
                margin: 5px 0;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes bounceIn {
                0% { transform: scale(0.3); opacity: 0; }
                50% { transform: scale(1.05); }
                70% { transform: scale(0.9); }
                100% { transform: scale(1); opacity: 1; }
            }

            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }

            @keyframes wiggle {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(5deg); }
                75% { transform: rotate(-5deg); }
            }

            @keyframes floatUp {
                0% {
                    transform: translateY(100%) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }

            @keyframes slideInLeft {
                from {
                    transform: translateX(-50px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .love-meter {
                width: 100%;
                height: 30px;
                background: #f0f0f0;
                border-radius: 15px;
                overflow: hidden;
                margin: 20px 0;
                position: relative;
            }

            .love-fill {
                height: 100%;
                background: linear-gradient(90deg, #ff6b91, #ff8e8e);
                width: 0%;
                transition: width 0.5s ease;
                border-radius: 15px;
            }

            .love-percentage {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-weight: bold;
                color: white;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
            }
        `;
        document.head.appendChild(style);
    }

    createHeartAnimation(container) {
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'cute-hearts';
        
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = ['💖', '💕', '💗', '💝', '💘'][i % 5];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heartsContainer.appendChild(heart);
        }
        
        container.appendChild(heartsContainer);
    }

    showVirtualHug() {
        this.createMessageBox({
            title: "Virtual Hug Sent! 🤗",
            emoji: "🤗",
            content: "I'm wrapping you in the biggest, warmest virtual hug right now! Feel my love wrapping around you like the coziest blanket. You're so special to me!",
            buttonText: "Hug Received! 💕"
        });
    }

    showLoveCalculator() {
        const container = this.createMessageBox({
            title: "Our Love Calculator 💕",
            emoji: "💝",
            content: "Calculating how much I love you...",
            buttonText: "See Result!",
            showButton: false
        });

        const loveMeter = document.createElement('div');
        loveMeter.className = 'love-meter';
        loveMeter.innerHTML = `
            <div class="love-fill" id="loveFill"></div>
            <div class="love-percentage" id="lovePercentage">0%</div>
        `;
        container.querySelector('.cute-content').appendChild(loveMeter);

        // Animate love percentage
        let percentage = 0;
        const interval = setInterval(() => {
            percentage += 2;
            const fill = document.getElementById('loveFill');
            const text = document.getElementById('lovePercentage');
            
            if (fill && text) {
                fill.style.width = percentage + '%';
                text.textContent = percentage + '%';
                
                if (percentage >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        text.innerHTML = '∞%';
                        container.querySelector('.cute-content').innerHTML += `
                            <p style="margin-top: 15px; font-weight: bold; color: #d63384;">
                                My love for you is immeasurable! 💖
                            </p>
                        `;
                        this.addCloseButton(container);
                    }, 500);
                }
            }
        }, 50);
    }

    showApologySong() {
        this.createMessageBox({
            title: "My Heartfelt Apology Song 🎵",
            emoji: "🎶",
            content: `
                <div style="background: rgba(255,255,255,0.8); padding: 20px; border-radius: 15px; margin: 15px 0;">
                    <p style="font-style: italic; line-height: 1.8;">
                        🎵 "I'm sorry, I'm sorry, I messed up so bad<br>
                        But you're the best thing I ever had<br>
                        Please forgive me, my beautiful queen<br>
                        Without you, my world has no sheen"<br><br>
                        
                        🎵 "You're my sunshine, my moonlight, my everything dear<br>
                        I'll cherish you forever, I'll always be near<br>
                        I'm sorry for hurting the one I love most<br>
                        You're my heart, my soul, my beautiful ghost" 🎵
                    </p>
                </div>
                <p style="margin-top: 15px;">This song is from my heart to yours 💕</p>
            `,
            buttonText: "I Forgive You! 💝"
        });
    }

    showCompliments() {
        const compliments = [
            "Your smile could power the entire city with its brightness ✨",
            "You're cuter than a basket full of puppies wearing tiny sweaters 🐶",
            "Your laugh is my favorite song - I could listen to it forever 😊",
            "You're more beautiful than the most stunning sunset I've ever seen 🌅",
            "You're sweeter than all the desserts in the world combined 🍭",
            "Your eyes are like beautiful galaxies I get happily lost in 👀",
            "You're my favorite notification - I smile every time I see your name 📱",
            "You're warmer and cozier than my favorite hoodie on a cold day 🧥",
            "You're more precious to me than all the stars in the sky ⭐",
            "You're the cutest human being to ever exist - and you're mine! 💕"
        ];

        const container = this.createMessageBox({
            title: "You're Amazing Because... 💝",
            emoji: "✨",
            content: "<div id='complimentsList'></div>",
            buttonText: "Thank You! 😊"
        });

        const list = container.querySelector('#complimentsList');
        compliments.forEach((compliment, index) => {
            setTimeout(() => {
                const item = document.createElement('div');
                item.className = 'compliment-item';
                item.textContent = compliment;
                list.appendChild(item);
            }, index * 300);
        });
    }

    showFutureDate() {
        this.createMessageBox({
            title: "Our Magical Future Date 🌈",
            emoji: "💑",
            content: `
                <div class="date-section">
                    <h3>🌸 Morning Magic:</h3>
                    <p>Breakfast in bed with heart-shaped pancakes and your favorite coffee, served with a side of kisses 💋</p>
                </div>
                
                <div class="date-section">
                    <h3>🎡 Afternoon Adventure:</h3>
                    <p>Visit to the cutest cat café where we'll play with kittens, then a romantic walk in the botanical gardens holding hands 🌺</p>
                </div>
                
                <div class="date-section">
                    <h3>🌅 Evening Romance:</h3>
                    <p>Sunset picnic at the beach with fairy lights, your favorite foods, and slow dancing to our song in the sand 🏖️</p>
                </div>
                
                <div class="date-section">
                    <h3>✨ Night Dreams:</h3>
                    <p>Stargazing while wrapped in blankets, making wishes on shooting stars, and planning our forever together 💫</p>
                </div>
                
                <p style="margin-top: 20px; font-weight: bold; color: #d63384;">
                    Every moment with you is magical, but this would be perfect! 💕
                </p>
            `,
            buttonText: "Let's Do It! 💕"
        });
    }

    createMessageBox(options) {
        const overlay = document.createElement('div');
        overlay.className = 'cute-overlay';
        
        const container = document.createElement('div');
        container.className = 'cute-message-container';
        
        container.innerHTML = `
            <h2 class="cute-title">${options.title}</h2>
            <div class="cute-emoji">${options.emoji}</div>
            <div class="cute-content">${options.content}</div>
        `;

        this.createHeartAnimation(container);
        
        if (options.showButton !== false) {
            this.addCloseButton(container);
        }

        overlay.appendChild(container);
        document.body.appendChild(overlay);

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeMessage(overlay);
            }
        });

        return container;
    }

    addCloseButton(container) {
        const button = document.createElement('button');
        button.className = 'cute-button';
        button.textContent = container.querySelector('.cute-button')?.textContent || 'Close';
        button.onclick = () => {
            this.closeMessage(container.closest('.cute-overlay'));
        };
        container.appendChild(button);
    }

    closeMessage(overlay) {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// Initialize the cute message system
const cuteMessages = new CuteMessageBox();

// Override the original functions
function showVirtualHug() {
    cuteMessages.showVirtualHug();
}

function showLoveCalculator() {
    cuteMessages.showLoveCalculator();
}

function playApologySong() {
    cuteMessages.showApologySong();
}

function showCompliments() {
    cuteMessages.showCompliments();
}

function showFutureDate() {
    cuteMessages.showFutureDate();
}
