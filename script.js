const TARGET_PIN = "090812";
let currentPin = "";
let isUnlocked = false;

// 30 Paragraf Teks Sesuai Hubungan Virtual
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
    "Saat harimu terasa berat, aku ingin kamu tahu bahwa aku selalu di sini. Menyiapkan telinga untuk mendengarkan, dan mengetikkan ribuan kata penenang hingga kamu merasa lebih baik.",
    "Kehadiranmu memberikanku rasa nyaman yang luar biasa. Walaupun kita hanya menatap layar yang sama di tempat yang berbeda, aku merasa kita sedang memandangi langit malam yang sama.",
    "Aku berjanji akan selalu menjadi *support system* virtual terbaikmu. Menjadi orang pertama yang menyukai postinganmu, mengirimkan pesan penyemangat setiap pagi, dan mendengarkan keluh kesahmu setiap malam.",
    "Di hari ulang tahunmu ini, doa pertamaku adalah untuk kesehatanmu. Jaga dirimu baik-baik di sana, makan yang teratur, dan jangan terlalu lelah menatap layar. Kesehatanmu sangat berharga.",
    "Doa keduaku adalah untuk kebahagiaanmu. Semoga senyum indah itu tidak pernah luntur, dan semoga hal-hal baik selalu menemukan jalannya menujumu, hari ini dan selamanya.",
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
    "Aku ingin kamu merayakan hari ini dengan penuh kebahagiaan. Baca kembali pesan ini saat kamu butuh pengingat bahwa ada seseorang yang sangat menyayangimu dari kejauhan.",
    "Jadikan usia barumu ini sebagai lembaran kosong yang siap diisi dengan pengalaman baru, pencapaian hebat, dan tawa yang lebih banyak lagi.",
    "Tetaplah menjadi Zahra yang kukenal. Zahra yang tangguh, ceria, baik hati, dan selalu mampu memancarkan energi positif meski hanya lewat pesan teks.",
    "Selamat ulang tahun, cintaku. Dari sini, dari balik layar ini, aku mengirimkan doa, harapan, dan cinta yang tidak terhingga untukmu. Teruslah bersinar, Zahra."
];

// SVG Generator (Dibuat jauh lebih minimalis dan elegan, warna soft pastel)
const svgs = {
    apple: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50,85 C65,85 80,75 80,55 C80,35 60,30 50,45 C40,30 20,35 20,55 C20,75 35,85 50,85 Z" fill="#FFB6C1"/><path d="M45,25 Q50,15 60,15 Q55,25 45,25 Z" fill="#E6E6FA"/></svg>`,
    strawberry: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50,90 C80,70 90,40 75,20 C65,5 35,5 25,20 C10,40 20,70 50,90 Z" fill="#FFC0CB"/><path d="M50,15 C45,5 35,10 35,10 C45,15 50,15 50,15 Z" fill="#DCD0FF"/></svg>`,
    heart: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50,85 C50,85 10,55 10,30 C10,15 25,10 35,20 C42.5,27.5 50,35 50,35 C50,35 57.5,27.5 65,20 C75,10 90,15 90,30 C90,55 50,85 50,85 Z" fill="#FFF0F5"/></svg>`
};

window.onload = () => {
    generateWishes();
    startFloatingDecorations();
    updateClock();
    setInterval(updateClock, 1000);
};

// PIN Logic
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
        // Coba mainkan lagu di sini setelah user tap layar
        document.getElementById('bg-music').volume = 0.5;
        document.getElementById('bg-music').play().catch(e => console.log("Menunggu interaksi lebih lanjut untuk audio."));
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

// FIX Transisi Layar
function switchScreen(hideId, showId) {
    document.getElementById(hideId).classList.remove('active-screen');
    setTimeout(() => {
        document.getElementById(showId).classList.add('active-screen');
    }, 100); // Waktu jeda transisi opacity
}

function unlockApp() {
    isUnlocked = true;
    switchScreen('pin-screen', 'loading-screen');

    const progressBar = document.getElementById('progress');
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 20; // Loading lebih cepat
        if(width >= 100) {
            width = 100;
            progressBar.style.width = '100%';
            clearInterval(interval);
            setTimeout(() => {
                switchScreen('loading-screen', 'main-app');
                document.getElementById('bottom-nav').classList.remove('hidden');
                initMainApp();
            }, 500);
        } else {
            progressBar.style.width = width + '%';
        }
    }, 300);
}

function initMainApp() {
    initScrollReveal();
    startFireworks();
    observeSVG();
}

function generateWishes() {
    const container = document.getElementById('wishes-text');
    romanticParagraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        container.appendChild(p);
    });
}

function updateClock() {
    if(!isUnlocked) return;
    const now = new Date();
    const formatOpts = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    document.getElementById('time-wib').innerHTML = `WIB<br><b>${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Jakarta'})}</b>`;
    document.getElementById('time-wita').innerHTML = `WITA<br><b>${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Makassar'})}</b>`;
    document.getElementById('time-wit').innerHTML = `WIT<br><b>${now.toLocaleTimeString('id-ID', {...formatOpts, timeZone: 'Asia/Jayapura'})}</b>`;
    document.getElementById('time-utc').innerHTML = `UTC<br><b>${now.toLocaleTimeString('en-GB', {...formatOpts, timeZone: 'UTC'})}</b>`;
}

// Floating Decor: Diubah menjadi style 'Bokeh' Partikel Kaca Lembut
function startFloatingDecorations() {
    const container = document.getElementById('decor-container');
    const decorTypes = ['apple', 'strawberry', 'heart'];
    
    setInterval(() => {
        const el = document.createElement('div');
        el.className = 'floating-decor';
        
        const type = decorTypes[Math.floor(Math.random() * decorTypes.length)];
        const size = Math.random() * 15 + 10; // Ukuran diperkecil agar elegan
        const left = Math.random() * 100;
        const duration = Math.random() * 12 + 10;
        
        el.innerHTML = svgs[type];
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.left = `${left}vw`;
        el.style.animationDuration = `${duration}s`;
        el.style.opacity = Math.random() * 0.4 + 0.2; // Transparansi tinggi
        
        container.appendChild(el);
        setTimeout(() => el.remove(), duration * 1000);
    }, 1500); // Frekuensi kemunculan dikurangi agar tidak ramai
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Nav Logic
    const sections = document.querySelectorAll('.page-section');
    const navItems = document.querySelectorAll('.nav-item');
    
    document.getElementById('main-app').addEventListener('scroll', () => {
        let current = '';
        const scrollY = document.getElementById('main-app').scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - window.innerHeight / 2) {
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
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    setTimeout(() => { document.getElementById('lightbox-content').innerHTML = ''; }, 400);
}

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
    setTimeout(() => wishEl.remove(), 3000);
}

function observeSVG() {
    const svg = document.getElementById('svg-love');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            svg.classList.add('draw');
            setTimeout(() => {
                document.getElementById('secret-box').classList.remove('hidden');
            }, 3500);
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
    setTimeout(() => {
        document.getElementById('main-app').scrollTo({top: 0, behavior: 'smooth'});
    }, 400);
}

function startFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = document.getElementById('hero').clientWidth;
        canvas.height = document.getElementById('hero').clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    // Warna soft pastel untuk kembang api
    const colors = ['#FF2A85', '#FFB6C1', '#FFF0F5', '#E6E6FA'];

    class Particle {
        constructor(x, y, color) {
            this.x = x; this.y = y; this.color = color;
            this.radius = Math.random() * 1.5 + 0.5;
            this.velocity = { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 };
            this.life = 100; this.alpha = 1;
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
            this.x += this.velocity.x; this.y += this.velocity.y;
            this.velocity.y += 0.03; 
            this.life -= 1.5; this.alpha -= 0.015;
        }
    }

    function createFirework(x, y) {
        for(let i = 0; i < 30; i++) {
            particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    function animateCanvas() {
        requestAnimationFrame(animateCanvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if(Math.random() < 0.03) {
            createFirework(Math.random() * canvas.width, Math.random() * (canvas.height/2));
        }

        for(let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.update(); p.draw();
            if(p.alpha <= 0 || p.life <= 0) particles.splice(i, 1);
        }
    }
    animateCanvas();
}
