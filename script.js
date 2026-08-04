/* 
    SENIOR ARCHITECTURE LEVEL JAVASCRIPT
    Modules: Security (PIN), Audio, UI State, Particles, 
    ScrollReveal, TimeFormatter, Fireworks Canvas.
*/

// --- DATA & CONFIG ---
const TARGET_PIN = "090812";
let currentPin = "";
let isUnlocked = false;

// Teks 30 Paragraf (Strictly Virtual Relationship)
const romanticParagraphs = [
    "Zahra, hari ini adalah tanggal sembilan Agustus, hari di mana dunia menyambut kehadiran seseorang yang sangat istimewa. Hari ini aku ingin merayakannya bersamamu, meski hanya melalui layar yang memisahkan kita.",
    "Walaupun dipisahkan jarak yang membentang, aku selalu merasa dekat denganmu. Koneksi digital ini tidak pernah membuat rasaku padamu menjadi maya. Semuanya nyata, sejelas notifikasi yang selalu kutunggu setiap harinya.",
    "Setiap pesan darimu selalu berarti. Sebuah teks sederhana 'selamat pagi' atau cerita kecil tentang harimu mampu merubah hariku yang biasa menjadi luar biasa berwarna.",
    "Setiap panggilan darimu selalu menjadi kebahagiaan. Mendengar suaramu dari kejauhan, tawamu yang renyah melalui speaker ponsel, adalah melodi favorit yang tidak pernah bosan kudengarkan.",
    "Setiap notifikasi darimu selalu membuat hariku lebih indah. Layar ponsel yang menyala menampilkan namamu adalah keajaiban kecil yang selalu membuatku tersenyum tanpa sadar.",
    "Meski dunia digital menjadi tempat kita bertemu, rasa syukurku selalu nyata. Aku bersyukur teknologi mengizinkanku mengenal jiwa seindah dirimu dari seberang sana.",
    "Aku tahu, terkadang jarak membuat segalanya terasa menantang. Tidak ada pertemuan tiba-tiba, tidak ada tatap muka langsung, tapi percayalah, ruang obrolan kita adalah rumah yang paling nyaman bagiku.",
    "Ketegaranmu menjalani hari-hari selalu membuatku kagum. Melihat bagaimana kamu berusaha dan berjuang, meskipun aku hanya bisa menyemangatimu lewat pesan suara, membuatku sangat bangga padamu.",
    "Kebaikan hatimu menembus batasan piksel dan sinyal. Cara kamu mendengarkan ceritaku, cara kamu memberikan ketenangan lewat ketikan teksmu, membuktikan betapa lembutnya hatimu.",
    "Aku sangat bangga dengan semua pencapaianmu. Setiap kali kamu membagikan kabar baik berupa foto atau pesan tentang keberhasilanmu, aku di sini ikut merayakannya dengan sorak bahagia.",
    "Saat harimu terasa berat, aku ingin kamu tahu bahwa aku selalu di sini. *Online* untukmu. Menyiapkan telinga untuk mendengarkan, dan mengetikkan ribuan kata penenang hingga kamu merasa lebih baik.",
    "Kehadiranmu memberikanku rasa nyaman yang luar biasa. Walaupun kita hanya menatap layar yang sama di tempat yang berbeda, aku merasa kita sedang memandangi langit malam yang sama.",
    "Aku berjanji akan selalu menjadi *support system* virtual terbaikmu. Menjadi orang pertama yang menyukai postinganmu, mengirimkan pesan penyemangat setiap pagi, dan mendengarkan keluh kesahmu setiap malam.",
    "Di hari ulang tahunmu ini, doa pertamaku adalah untuk kesehatanmu. Jaga dirimu baik-baik di sana, makan yang teratur, dan jangan terlalu lelah menatap layar. Kesehatanmu sangat berharga.",
    "Doa keduaku adalah untuk kebahagiaanmu. Semoga senyum indah itu tidak pernah luntur, dan semoga hal-hal baik selalu menemukan jalannya menujumu, hari ini dan selamanya.",
    "Aku selalu mendoakan agar semua impianmu dapat tercapai. Langkah demi langkah yang kamu ambil, meski aku hanya bisa melihatnya dari *update* statusmu, selalu mendapat dukungan penuh dariku.",
    "Aku rindu tawamu saat kita bertelepon larut malam. Pembicaraan dalam kita tentang masa depan, tentang mimpi, dan tentang hal-hal konyol yang kita temukan di internet selalu menjadi bagian terbaik dalam hariku.",
    "Membagikan *meme* lucu, tautan video, atau sekadar cerita tentang kucing yang lewat di depan rumah adalah cara sederhana kita merajut kedekatan. Hal-hal kecil itu yang membuat ikatan kita begitu kuat.",
    "Kamu telah memberi warna yang begitu terang dalam duniaku. Ruang obrolan kita yang dipenuhi stiker lucu dan pesan panjang adalah galeri seni paling indah yang kumiliki.",
    "Kepercayaan yang kita bangun sungguh luar biasa. Terpisah jarak mengajarkan kita tentang arti kesetiaan yang sebenarnya, tentang menghargai waktu dan menghargai kehadiran meski tidak berwujud fisik.",
    "Kesabaranmu dalam hubungan virtual ini sangat kuhargai. Menunggu waktu luang untuk *video call*, menyelaraskan jadwal di tengah kesibukan masing-masing, kamu melakukan semuanya dengan penuh pengertian.",
    "Semoga suatu hari semua doa terbaik kita dikabulkan. Doa yang sering kita ketik, amin yang sering kita ucapkan bersama melalui sambungan telepon.",
    "Aku percaya pada takdir yang mempertemukan kita di dunia digital ini. Jutaan akun, miliaran data, namun algoritma semesta membawa namamu muncul dalam hidupku.",
    "Terima kasih, Zahra, karena telah memilih untuk membuka hatimu untukku. Terima kasih telah membalas pesanku hari itu, awal dari cerita panjang kita yang menakjubkan ini.",
    "Terima kasih karena selalu bertahan. Melalui jaringan yang kadang buruk, kesibukan yang menyita waktu, kamu tetap menjadikan kita sebagai prioritas yang dijaga dengan baik.",
    "Semakin hari, rasa sayangku padamu semakin besar. Jarak fisik tidak pernah mampu mengerdilkan perasaan ini, justru membuatnya semakin mendalam dan berarti.",
    "Aku ingin kamu merayakan hari ini dengan penuh kebahagiaan. Baca kembali pesan ini saat kamu butuh pengingat bahwa ada seseorang yang sangat menyayangimu dari kejauhan.",
    "Jadikan usia barumu ini sebagai lembaran kosong yang siap diisi dengan pengalaman baru, pencapaian hebat, dan tawa yang lebih banyak lagi.",
    "Tetaplah menjadi Zahra yang kukenal. Zahra yang tangguh, ceria, baik hati, dan selalu mampu memancarkan energi positif meski hanya lewat pesan teks.",
    "Selamat ulang tahun, cintaku. Dari sini, dari balik layar ini, aku mengirimkan doa, harapan, dan cinta yang tidak terhingga untukmu. Teruslah bersinar, Zahra."
];

// --- SVG DECORATION GENERATORS (No Emojis allowed) ---
const svgs = {
    apple: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50,85 C65,85 80,75 80,55 C80,35 60,30 50,45 C40,30 20,35 20,55 C20,75 35,85 50,85 Z" fill="#FF1493"/><path d="M45,25 Q50,15 60,15 Q55,25 45,25 Z" fill="#32CD32"/></svg>`,
    strawberry: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50,90 C80,70 90,40 75,20 C65,5 35,5 25,20 C10,40 20,70 50,90 Z" fill="#FF007F"/><path d="M50,15 C45,5 35,10 35,10 C45,15 50,15 50,15 Z" fill="#008000"/><circle cx="40" cy="35" r="2" fill="white"/><circle cx="60" cy="40" r="2" fill="white"/><circle cx="50" cy="60" r="2" fill="white"/><circle cx="35" cy="55" r="2" fill="white"/><circle cx="65" cy="65" r="2" fill="white"/></svg>`,
    heart: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50,85 C50,85 10,55 10,30 C10,15 25,10 35,20 C42.5,27.5 50,35 50,35 C50,35 57.5,27.5 65,20 C75,10 90,15 90,30 C90,55 50,85 50,85 Z" fill="#FFB6C1"/></svg>`,
    star: `<svg viewBox="0 0 100 100" width="100%" height="100%"><polygon points="50,5 61,35 95,35 67,55 78,85 50,65 22,85 33,55 5,35 39,35" fill="#FFFDD0"/></svg>`,
    sparkle: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" fill="#F984E5"/></svg>`
};

// --- INITIALIZATION ---
window.onload = () => {
    generateWishes();
    startFloatingDecorations();
    updateClock();
    setInterval(updateClock, 1000);
};

// --- PIN LOGIC ---
function enterPin(num) {
    if(currentPin.length < 6) {
        currentPin += num;
        updateDots();
    }
    if(currentPin.length === 6) {
        checkPin();
    }
}
function clearPin() { currentPin = ""; updateDots(); }
function deletePin() { currentPin = currentPin.slice(0, -1); updateDots(); }
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('filled', index < currentPin.length);
    });
}
function checkPin() {
    if(currentPin === TARGET_PIN) {
        unlockApp();
    } else {
        const keypad = document.querySelector('.keypad');
        keypad.classList.add('shake');
        setTimeout(() => {
            keypad.classList.remove('shake');
            clearPin();
        }, 400);
    }
}

// --- TRANSITIONS ---
function unlockApp() {
    isUnlocked = true;
    document.getElementById('pin-screen').classList.remove('active-screen');
    document.getElementById('loading-screen').classList.add('active-screen');
    
    // Play BGM
    const bgm = document.getElementById('bg-music');
    bgm.volume = 0.5;
    bgm.play().catch(e => console.log("Audio play failed, waiting for user interaction."));

    // Simulate Loading
    const progressBar = document.getElementById('progress');
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 15;
        if(width >= 100) {
            width = 100;
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loading-screen').classList.remove('active-screen');
                document.getElementById('main-app').classList.add('active-screen');
                document.getElementById('bottom-nav').classList.remove('hidden');
                initMainApp();
            }, 800);
        }
        progressBar.style.width = width + '%';
    }, 200);
}

function initMainApp() {
    initScrollReveal();
    startFireworks();
    observeSVG();
}

// --- WISHES GENERATOR ---
function generateWishes() {
    const container = document.getElementById('wishes-text');
    romanticParagraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        container.appendChild(p);
    });
}

// --- REALTIME CLOCK ---
function updateClock() {
    if(!isUnlocked) return;
    const now = new Date();
    const formatOpts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    document.getElementById('time-wib').innerHTML = `<b>WIB:</b> ${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Jakarta'})}`;
    document.getElementById('time-wita').innerHTML = `<b>WITA:</b> ${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Makassar'})}`;
    document.getElementById('time-wit').innerHTML = `<b>WIT:</b> ${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Jayapura'})}`;
    document.getElementById('time-utc').innerHTML = `<b>UTC:</b> ${now.toLocaleTimeString('en-GB', {...formatOpts, timeZone: 'UTC'})}`;
}

// --- FLOATING DECORATIONS ---
function startFloatingDecorations() {
    const container = document.getElementById('decor-container');
    const decorTypes = ['apple', 'strawberry', 'heart', 'star', 'sparkle'];
    
    setInterval(() => {
        const el = document.createElement('div');
        el.className = 'floating-decor';
        
        // Randomize
        const type = decorTypes[Math.floor(Math.random() * decorTypes.length)];
        const size = Math.random() * 30 + 15; // 15px to 45px
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10; // 10s to 20s
        
        el.innerHTML = svgs[type];
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.left = `${left}vw`;
        el.style.animationDuration = `${duration}s`;
        
        container.appendChild(el);
        
        // Remove after animation
        setTimeout(() => el.remove(), duration * 1000);
    }, 800);
}

// --- SCROLL REVEAL & NAVIGATION ---
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Nav Active State logic
    const sections = document.querySelectorAll('.page-section');
    const navItems = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
}

// --- LIGHTBOX GALLERY ---
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    content.innerHTML = '';
    
    const clone = element.children[0].cloneNode(true);
    if(clone.tagName === 'VIDEO') {
        clone.setAttribute('controls', 'true');
        clone.muted = false; // Allow sound in fullscreen
    }
    content.appendChild(clone);
    lightbox.classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.getElementById('lightbox-content').innerHTML = '';
}

// --- MAKE A WISH ---
function sendWish() {
    const input = document.getElementById('wish-input');
    const text = input.value.trim();
    if(!text) return;

    input.value = '';
    const container = document.getElementById('wish-animation-container');
    const wishEl = document.createElement('div');
    wishEl.className = 'flying-wish';
    wishEl.innerText = text;
    
    container.appendChild(wishEl);
    
    setTimeout(() => {
        wishEl.remove();
    }, 3000);
}

// --- SVG DRAWING & SECRET BOX ---
function observeSVG() {
    const svg = document.getElementById('svg-love');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            svg.classList.add('draw');
            setTimeout(() => {
                document.getElementById('secret-box').classList.remove('hidden');
            }, 4000);
            observer.disconnect();
        }
    });
    observer.observe(svg);
}

function openGift() {
    document.getElementById('gift-modal').classList.add('active');
}

function resetToStart() {
    document.getElementById('gift-modal').classList.remove('active');
    window.scrollTo(0, 0);
}

// --- FIREWORKS CANVAS ENGINE ---
function startFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#FF1493', '#FFB6C1', '#DCD0FF', '#FFFDD0', '#F984E5'];

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = Math.random() * 2 + 1;
            this.velocity = {
                x: (Math.random() - 0.5) * 6,
                y: (Math.random() - 0.5) * 6
            };
            this.life = 100;
            this.alpha = 1;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
        update() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.velocity.y += 0.05; // Gravity
            this.life -= 1;
            this.alpha -= 0.01;
        }
    }

    function createFirework(x, y) {
        for(let i = 0; i < 40; i++) {
            particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    function animateCanvas() {
        requestAnimationFrame(animateCanvas);
        ctx.fillStyle = 'rgba(253, 232, 237, 0.2)'; // Soft clearing matching bg
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Auto fireworks
        if(Math.random() < 0.05) {
            createFirework(Math.random() * canvas.width, Math.random() * (canvas.height/2));
        }

        for(let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.update();
            p.draw();
            if(p.alpha <= 0 || p.life <= 0) {
                particles.splice(i, 1);
            }
        }
    }
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    animateCanvas();
}
