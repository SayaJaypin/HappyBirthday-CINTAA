const TARGET_PIN = "090812";
let currentPin = "";
let isUnlocked = false;

// 45 Paragraf & Puisi (Sangat Ekstrem dan Mendalam untuk Hubungan Virtual)
const romanticText = [
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
    "Saat harimu terasa berat, aku ingin kamu tahu bahwa aku selalu di sini. Menyiapkan telinga untuk mendengarkan, dan mengetikkan ribuan kata penenang hingga kamu merasa lebih baik.",
    "Kehadiranmu memberikanku rasa nyaman yang luar biasa. Walaupun kita hanya menatap layar yang sama di tempat yang berbeda, aku merasa kita sedang memandangi langit malam yang sama.",
    "Aku berjanji akan selalu menjadi *support system* virtual terbaikmu. Menjadi orang pertama yang menyukai postinganmu, mengirimkan pesan penyemangat setiap pagi, dan mendengarkan keluh kesahmu setiap malam.",
    "Di hari ulang tahunmu ini, doa pertamaku adalah untuk kesehatanmu. Jaga dirimu baik-baik di sana, makan yang teratur, dan jangan terlalu lelah menatap layar. Kesehatanmu sangat berharga.",
    "Doa keduaku adalah untuk kebahagiaanmu. Semoga senyum indah itu tidak pernah luntur, dan semoga hal-hal baik selalu menemukan jalannya menujumu, hari ini dan selamanya.",
    "[POEM_START]",
    "Di antara baris kode dan sinyal gelombang,",
    "Namamu terukir bukan sekadar bayang.",
    "Jarak hanyalah angka yang tak bermakna,",
    "Bila dua hati telah saling menyapa.",
    "Layar ini mungkin dingin tak bersuhu,",
    "Namun pesannya hangat merengkuh rindu.",
    "[POEM_END]",
    "Aku selalu mendoakan agar semua impianmu dapat tercapai. Langkah demi langkah yang kamu ambil, meski aku hanya bisa melihatnya dari *update* statusmu, selalu mendapat dukungan penuh dariku.",
    "Aku rindu tawamu saat kita bertelepon larut malam. Pembicaraan dalam kita tentang masa depan, tentang mimpi, dan tentang hal-hal konyol yang kita temukan di internet selalu menjadi bagian terbaik dalam hariku.",
    "Membagikan hal lucu, tautan video, atau sekadar cerita sederhana adalah cara kita merajut kedekatan. Hal-hal kecil itu yang membuat ikatan kita begitu kuat.",
    "Kamu telah memberi warna yang begitu terang dalam duniaku. Ruang obrolan kita yang dipenuhi cerita adalah galeri seni paling indah yang kumiliki.",
    "Kepercayaan yang kita bangun sungguh luar biasa. Terpisah jarak mengajarkan kita tentang arti kesetiaan yang sebenarnya, tentang menghargai kehadiran meski tidak berwujud fisik.",
    "Kesabaranmu dalam hubungan virtual ini sangat kuhargai. Menunggu waktu luang untuk menelepon, menyelaraskan jadwal di tengah kesibukan masing-masing, kamu melakukan semuanya dengan penuh pengertian.",
    "Semoga suatu hari semua doa terbaik kita dikabulkan. Doa yang sering kita ketik, amin yang sering kita ucapkan bersama melalui sambungan suara.",
    "Aku percaya pada takdir yang mempertemukan kita di dunia digital ini. Jutaan akun, miliaran data, namun algoritma semesta membawa namamu muncul dalam hidupku.",
    "Terima kasih, Zahra, karena telah memilih untuk membuka hatimu untukku. Terima kasih telah membalas pesanku hari itu, awal dari cerita panjang kita yang menakjubkan ini.",
    "Terima kasih karena selalu bertahan. Melalui jaringan yang kadang buruk, kesibukan yang menyita waktu, kamu tetap menjadikan kita sebagai prioritas yang dijaga dengan baik.",
    "Semakin hari, rasa sayangku padamu semakin besar. Jarak fisik tidak pernah mampu mengerdilkan perasaan ini, justru membuatnya semakin mendalam dan berarti.",
    "Setiap detik yang berlalu adalah bukti bahwa ikatan ini nyata. Meski tanpa genggaman tangan, hatiku merasa digenggam dengan sangat erat oleh kasih sayangmu.",
    "Aku mengingat setiap detail cerita yang kamu bagikan. Hal-hal kecil tentang makanan kesukaanmu, lagu yang sering kamu putar, hingga hal-hal yang membuatmu kesal.",
    "Mengenalmu adalah salah satu hadiah terbaik yang pernah kumiliki. Kamu mengajarkan aku bahwa jarak tidak bisa membunuh cinta, melainkan mengujinya menjadi lebih kuat.",
    "Aku ingin kamu merayakan hari ini dengan penuh kebahagiaan. Baca kembali pesan ini saat kamu butuh pengingat bahwa ada seseorang yang sangat menyayangimu dari kejauhan.",
    "Jadikan usia barumu ini sebagai lembaran kosong yang siap diisi dengan pengalaman baru, pencapaian hebat, dan tawa yang lebih banyak lagi.",
    "Tetaplah menjadi Zahra yang kukenal. Zahra yang tangguh, ceria, baik hati, dan selalu mampu memancarkan energi positif meski hanya lewat pesan teks.",
    "Jangan pernah meragukan dirimu sendiri. Di mataku, kamu selalu sempurna dengan segala kelebihan dan kekuranganmu.",
    "Aku akan selalu ada untuk merayakan setiap ulang tahunmu, mengisi kotak masukmu dengan doa, dan membuat layar ponselmu penuh dengan notifikasi kebahagiaan.",
    "Selamat bertambah usia, manusia favoritku. Dunia mungkin luas, tapi duniaku terasa cukup hanya dengan melihat namamu *online*.",
    "Selamat ulang tahun, cintaku. Dari sini, dari balik layar ini, aku mengirimkan doa, harapan, dan cinta yang tidak terhingga untukmu. Teruslah bersinar, Zahra."
];

// Premium SVGs
const svgs = {
    apple: `<svg viewBox="0 0 100 100"><defs><linearGradient id="ap" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF69B4"/><stop offset="100%" stop-color="#FF2A85"/></linearGradient></defs><path d="M50,85 C65,85 80,75 80,55 C80,35 60,30 50,45 C40,30 20,35 20,55 C20,75 35,85 50,85 Z" fill="url(#ap)"/><path d="M45,25 Q50,15 60,15 Q55,25 45,25 Z" fill="#DCD0FF"/></svg>`,
    strawberry: `<svg viewBox="0 0 100 100"><defs><linearGradient id="sb" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFC0CB"/><stop offset="100%" stop-color="#D81B60"/></linearGradient></defs><path d="M50,90 C80,70 90,40 75,20 C65,5 35,5 25,20 C10,40 20,70 50,90 Z" fill="url(#sb)"/><path d="M50,15 C45,5 35,10 35,10 C45,15 50,15 50,15 Z" fill="#FFF0F5"/></svg>`,
    sparkle: `<svg viewBox="0 0 100 100"><path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" fill="#FFE4E1"/></svg>`
};

window.onload = () => {
    generateWishes();
    startFloatingDecorations();
    updateClock();
    setInterval(updateClock, 1000);
    initBackgroundParticles();
};

// PIN Logic (Brutal Edition)
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
        dot.classList.remove('error');
        dot.classList.toggle('filled', index < currentPin.length);
    });
}

function checkPin() {
    if(currentPin === TARGET_PIN) {
        fireConfetti(document.getElementById('confetti-canvas'), 150);
        setTimeout(() => {
            document.getElementById('bg-music').volume = 0.5;
            document.getElementById('bg-music').play().catch(e => console.log("Waiting for more interaction."));
            unlockApp();
        }, 800);
    } else {
        const keypad = document.querySelector('.keypad');
        const dots = document.querySelectorAll('.dot');
        keypad.classList.add('shake-error');
        dots.forEach(d => d.classList.add('error'));
        setTimeout(() => {
            keypad.classList.remove('shake-error');
            clearPin();
        }, 500);
    }
}

// Master Screen Transition
function switchScreen(hideId, showId) {
    document.getElementById(hideId).classList.remove('active-screen');
    setTimeout(() => { document.getElementById(showId).classList.add('active-screen'); }, 500); 
}

function unlockApp() {
    isUnlocked = true;
    switchScreen('pin-screen', 'loading-screen');

    const progressBar = document.getElementById('progress');
    const percentText = document.getElementById('loading-percent');
    const loadText = document.getElementById('loading-text-anim');
    const loadPhrases = ["Memuat memori...", "Menghangatkan piksel...", "Menyatukan serpihan rindu..."];
    
    let width = 0;
    let phraseIdx = 0;
    
    const interval = setInterval(() => {
        width += Math.random() * 15; 
        if(width >= 100) width = 100;
        
        progressBar.style.width = width + '%';
        percentText.innerText = Math.floor(width) + '%';
        
        if(width > 30 && phraseIdx === 0) { loadText.innerText = loadPhrases[1]; phraseIdx++; }
        if(width > 70 && phraseIdx === 1) { loadText.innerText = loadPhrases[2]; phraseIdx++; }
        
        if(width === 100) {
            clearInterval(interval);
            setTimeout(() => {
                switchScreen('loading-screen', 'main-app');
                document.getElementById('bottom-nav').classList.remove('hidden');
                initMainApp();
            }, 800);
        }
    }, 250);
}

function initMainApp() {
    initScrollReveal();
    observeSVG();
    startTypewriter();
    initCinematicGallery();
}

function generateWishes() {
    const container = document.getElementById('wishes-text');
    let isPoem = false;
    let poemDiv = null;

    romanticText.forEach(text => {
        if(text === "[POEM_START]") {
            isPoem = true;
            poemDiv = document.createElement('div');
            poemDiv.className = 'poem-section';
            return;
        }
        if(text === "[POEM_END]") {
            isPoem = false;
            container.appendChild(poemDiv);
            return;
        }

        const p = document.createElement('p');
        p.textContent = text;
        
        if(isPoem) {
            poemDiv.appendChild(p);
        } else {
            container.appendChild(p);
        }
    });
}

function updateClock() {
    if(!isUnlocked) return;
    const now = new Date();
    const formatOpts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    document.getElementById('time-wib').innerHTML = `<span>WIB</span><b>${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Jakarta'})}</b>`;
    document.getElementById('time-wita').innerHTML = `<span>WITA</span><b>${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Makassar'})}</b>`;
    document.getElementById('time-wit').innerHTML = `<span>WIT</span><b>${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Jayapura'})}</b>`;
    document.getElementById('time-utc').innerHTML = `<span>UTC</span><b>${now.toLocaleTimeString('en-GB', {...formatOpts, timeZone: 'UTC'})}</b>`;
}

// Interactive Audio Player
let isPlaying = true;
let visualizerInterval;
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    const vinyl = document.getElementById('vinyl');
    const btn = document.getElementById('btn-play');
    
    if(isPlaying) {
        audio.pause();
        vinyl.classList.remove('playing');
        btn.innerHTML = '<i class="ph-fill ph-play"></i>';
        clearInterval(visualizerInterval);
        document.querySelectorAll('.bar').forEach(b => b.style.height = '2px');
    } else {
        audio.play();
        vinyl.classList.add('playing');
        btn.innerHTML = '<i class="ph-fill ph-pause"></i>';
        animateVisualizer();
    }
    isPlaying = !isPlaying;
}

function animateVisualizer() {
    const bars = document.querySelectorAll('.bar');
    visualizerInterval = setInterval(() => {
        bars.forEach(bar => {
            bar.style.height = Math.random() * 12 + 3 + 'px';
        });
    }, 150);
}

// Typewriter
function startTypewriter() {
    const text = "Sembilan Agustus Dua Ribu Dua Belas";
    const el = document.getElementById('typewriter-date');
    let i = 0;
    el.innerHTML = '';
    function type() {
        if(i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            document.getElementById('vinyl').classList.add('playing');
            animateVisualizer(); // Start music visualizer animation
        }
    }
    setTimeout(type, 1000);
}

// Floating Bokeh SVGs
function startFloatingDecorations() {
    const container = document.getElementById('decor-container');
    const types = ['apple', 'strawberry', 'sparkle'];
    setInterval(() => {
        const el = document.createElement('div');
        el.className = 'floating-decor';
        const type = types[Math.floor(Math.random() * types.length)];
        const size = Math.random() * 25 + 15;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 15;
        
        el.innerHTML = svgs[type];
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.left = `${left}vw`;
        el.style.animationDuration = `${duration}s`;
        el.style.opacity = Math.random() * 0.4 + 0.3;
        
        container.appendChild(el);
        setTimeout(() => el.remove(), duration * 1000);
    }, 1200);
}

// Advanced Reveal & Nav Logic
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const sections = document.querySelectorAll('.page-section');
    const navItems = document.querySelectorAll('.nav-item');
    const mainApp = document.getElementById('main-app');
    
    mainApp.addEventListener('scroll', () => {
        let current = '';
        const scrollY = mainApp.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - window.innerHeight / 2.5) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });

        // 3D Tilt hero effect
        if(current === 'hero') {
            const tilt = (scrollY / 15);
            document.querySelector('.tilt-effect').style.transform = `rotateX(${tilt}deg) translateY(${scrollY/3}px)`;
        }
    });
}

// Cinematic Gallery Intersection
function initCinematicGallery() {
    const items = document.querySelectorAll('.scroll-item');
    const wrapper = document.querySelector('.horizontal-scroll-wrapper');
    
    wrapper.addEventListener('scroll', () => {
        const center = wrapper.getBoundingClientRect().left + wrapper.offsetWidth / 2;
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.left + rect.width / 2;
            const dist = Math.abs(center - itemCenter);
            
            if(dist < 150) {
                item.classList.add('active-item');
            } else {
                item.classList.remove('active-item');
            }
        });
    });
    // Trigger initial check
    setTimeout(() => { wrapper.dispatchEvent(new Event('scroll')); }, 500);
}

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    content.innerHTML = '';
    
    const clone = element.children[0].cloneNode(true);
    if(clone.tagName === 'VIDEO') {
        clone.setAttribute('controls', 'true');
        clone.muted = false;
    }
    content.appendChild(clone);
    lightbox.classList.add('active');
}
function closeLightbox(e) {
    if(e.target.classList.contains('lightbox') || e.target.closest('.lightbox-close')) {
        document.getElementById('lightbox').classList.remove('active');
        setTimeout(() => { document.getElementById('lightbox-content').innerHTML = ''; }, 400);
    }
}

// Cosmic Wish
function sendCosmicWish() {
    const input = document.getElementById('wish-input');
    const text = input.value.trim();
    if(!text) return;
    
    const section = document.getElementById('make-wish');
    const starCanvas = document.getElementById('star-canvas');
    section.classList.add('cosmic-mode');
    starCanvas.style.opacity = '1';
    
    input.value = '';
    
    const wishEl = document.createElement('div');
    wishEl.className = 'shooting-star-anim';
    wishEl.innerText = text;
    section.appendChild(wishEl);
    
    setTimeout(() => {
        wishEl.remove();
        section.classList.remove('cosmic-mode');
        starCanvas.style.opacity = '0';
    }, 4000);
}

// Final SVG Logic
function observeSVG() {
    const svg = document.getElementById('svg-love');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            svg.classList.add('draw');
            setTimeout(() => {
                document.getElementById('secret-box').classList.remove('hidden');
                document.getElementById('secret-box').addEventListener('click', openGift);
            }, 4500);
            observer.disconnect();
        }
    });
    observer.observe(svg);
}

function openGift() {
    document.getElementById('gift-modal').classList.add('active');
    setTimeout(() => { fireConfetti(document.getElementById('modal-confetti'), 200); }, 300);
}

function resetToStart() {
    document.getElementById('gift-modal').classList.remove('active');
    setTimeout(() => { document.getElementById('main-app').scrollTo({top: 0, behavior: 'smooth'}); }, 400);
}

// ==========================================
// CANAVAS ENGINES (PARTICLES & CONFETTI)
// ==========================================

// 1. Background Particles (Hearts, Stars, Dust)
function initBackgroundParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const colors = ['#FF2A85', '#FF69B4', '#FFF', '#FFB6C1'];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * -1 - 0.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    for (let i = 0; i < 150; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

// 2. Advanced Confetti Engine
function fireConfetti(canvas, count) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const pieces = [];
    const colors = ['#FF2A85', '#FFD700', '#D81B60', '#FFF', '#FF69B4'];
    
    for(let i=0; i<count; i++) {
        pieces.push({
            x: canvas.width / 2,
            y: canvas.height / 2 + 100,
            vx: (Math.random() - 0.5) * 25,
            vy: (Math.random() - 1) * 25 - 5,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rs: (Math.random() - 0.5) * 10
        });
    }
    
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        
        pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.5; // gravity
            p.rotation += p.rs;
            
            if(p.y < canvas.height) active = true;
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
        });
        
        if(active) requestAnimationFrame(render);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    render();
}

// 3. Cosmic Stars Canvas (For Make a Wish)
(function initCosmicStars() {
    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();
    
    const stars = [];
    for(let i=0; i<200; i++) {
        stars.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            r: Math.random() * 1.5,
            a: Math.random(),
            da: (Math.random() - 0.5) * 0.05
        });
    }
    function drawStars() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        stars.forEach(s => {
            s.a += s.da;
            if(s.a < 0 || s.a > 1) s.da = -s.da;
            ctx.globalAlpha = Math.abs(s.a);
            ctx.fillStyle = '#FFF';
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
            ctx.fill();
        });
        requestAnimationFrame(drawStars);
    }
    drawStars();
})();
