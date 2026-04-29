// =============================================
// GemSoul Quiz Logic
// =============================================

const GEMS = {
  ruby: {
    name: 'ทับทิม',
    latin: 'Ruby',
    emoji: '🔴',
    desc: 'คุณมีจิตวิญญาณนักสู้ที่แท้จริง กล้าหาญ มีพลังงาน และพร้อมเผชิญทุกความท้าทายด้วยหัวใจที่ลุกโชน ทับทิมคืออัญมณีแห่งความกล้าและความรัก เช่นเดียวกับคุณที่มอบทุกอย่างอย่างเต็มหัวใจ',
    traits: ['กล้าหาญ', 'มีพลัง', 'หัวใจร้อน', 'ผู้นำ'],
    link: 'gems.html#ruby',
    cssClass: 'gem-ruby',
  },
  sapphire: {
    name: 'แซฟไฟร์',
    latin: 'Sapphire',
    emoji: '🔵',
    desc: 'คุณมีสติปัญญาที่เฉียบแหลมและความสงบที่ลึกซึ้ง เหมือนน้ำทะเลที่ดูเงียบสงัดแต่มีความลึกไม่สิ้นสุด คุณวิเคราะห์ทุกสิ่งด้วยเหตุผลและมักให้คำแนะนำที่ถูกต้องที่สุด',
    traits: ['ฉลาดเฉียบแหลม', 'มีเหตุผล', 'น่าเชื่อถือ', 'สงบเยือกเย็น'],
    link: 'gems.html#sapphire',
    cssClass: 'gem-sapphire',
  },
  emerald: {
    name: 'มรกต',
    latin: 'Emerald',
    emoji: '💚',
    desc: 'คุณมีหัวใจที่อ่อนโยนและเมตตา รักธรรมชาติและความสัมพันธ์ที่แท้จริง คุณเติบโตงอกงามเหมือนต้นไม้ที่ผลิใบในฤดูใบไม้ผลิ และมีพลังการเยียวยาที่พิเศษสำหรับคนรอบข้าง',
    traits: ['เมตตากรุณา', 'รักสงบ', 'ซื่อสัตย์', 'เยียวยาใจ'],
    link: 'gems.html#emerald',
    cssClass: 'gem-emerald',
  },
  amethyst: {
    name: 'อเมทิสต์',
    latin: 'Amethyst',
    emoji: '💜',
    desc: 'คุณเป็นจิตวิญญาณอิสระที่มีจินตนาการไม่สิ้นสุด มีความรู้สึกละเอียดอ่อนและสัญชาตญาณที่แม่นยำ โลกของคุณเต็มไปด้วยความงาม ศิลปะ และแรงบันดาลใจที่คนอื่นมองไม่เห็น',
    traits: ['สร้างสรรค์', 'อิสระ', 'ลึกซึ้ง', 'สัญชาตญาณแม่น'],
    link: 'gems.html#amethyst',
    cssClass: 'gem-amethyst',
  },
  diamond: {
    name: 'เพชร',
    latin: 'Diamond',
    emoji: '💎',
    desc: 'คุณคือผู้แสวงหาความสมบูรณ์แบบ มีมาตรฐานสูงและความมุ่งมั่นที่ไม่ยอมแพ้ เหมือนเพชรที่ผ่านความกดดันสูงจึงเปล่งแสงได้งดงาม คุณก็เติบโตและแข็งแกร่งขึ้นจากทุกความยากลำบาก',
    traits: ['ขยันมุ่งมั่น', 'มาตรฐานสูง', 'ไม่ยอมแพ้', 'ยิ่งใหญ่'],
    link: 'gems.html#diamond',
    cssClass: 'gem-diamond',
  },
  citrine: {
    name: 'ซิทรีน',
    latin: 'Citrine',
    emoji: '🟡',
    desc: 'คุณคือแสงอาทิตย์ที่ทำให้ทุกคนรอบข้างอบอุ่น ร่าเริง และมีพลัง ซิทรีนหินแห่งความสุขและโชคลาภ เช่นเดียวกับคุณที่ดึงดูดสิ่งดีๆ เข้ามาในชีวิตด้วยพลังงานบวกที่ไม่มีวันหมด',
    traits: ['ร่าเริงสดใส', 'มองโลกแง่ดี', 'มีพลังงาน', 'สร้างบรรยากาศ'],
    link: 'gems.html#citrine',
    cssClass: 'gem-citrine',
  },
  obsidian: {
    name: 'ออบซิเดียน',
    latin: 'Obsidian',
    emoji: '⚫',
    desc: 'คุณมีพลังภายในที่เข้มแข็งและความลึกลับที่น่าดึงดูด ดูเผินๆ เย็นชาแต่ข้างในมีความรู้สึกที่ลึกและซับซ้อน คุณมองเห็นความจริงได้ตรงไปตรงมาและเป็นเกราะป้องกันที่ดีที่สุดสำหรับคนที่คุณรัก',
    traits: ['ลึกลับ', 'แข็งแกร่ง', 'ตรงไปตรงมา', 'ปกป้อง'],
    link: 'gems.html#obsidian',
    cssClass: 'gem-obsidian',
  },
  moonstone: {
    name: 'มูนสโตน',
    latin: 'Moonstone',
    emoji: '🌙',
    desc: 'คุณมีเสน่ห์ลึกลับเหมือนแสงจันทร์ที่เปลี่ยนแปลงไปทุกคืน มีสัญชาตญาณสูง ความรู้สึกละเอียดอ่อน และความสามารถในการเข้าใจอารมณ์ของผู้อื่นได้อย่างน่าอัศจรรย์',
    traits: ['ละเอียดอ่อน', 'มีสัญชาตญาณ', 'ฝันไกล', 'เข้าใจคน'],
    link: 'gems.html#moonstone',
    cssClass: 'gem-moonstone',
  },
};

const QUESTIONS = [
  {
    text: 'เมื่อเผชิญกับปัญหาใหญ่ คุณมักจะ...',
    options: [
      { text: '🦁 เผชิญหน้าทันทีด้วยความกล้า', gems: { ruby: 3, diamond: 1 } },
      { text: '🧠 วิเคราะห์สถานการณ์อย่างรอบคอบก่อนตัดสินใจ', gems: { sapphire: 3, diamond: 1 } },
      { text: '🌿 หาทางออกที่ทำให้ทุกฝ่ายพอใจ', gems: { emerald: 3, moonstone: 1 } },
      { text: '💭 นั่งคิดคนเดียวจนหาทางออกที่สร้างสรรค์', gems: { amethyst: 3, moonstone: 1 } },
    ],
  },
  {
    text: 'ในกลุ่มเพื่อน คุณมักมีบทบาทเป็น...',
    options: [
      { text: '👑 ผู้นำที่ตัดสินใจและพาทุกคนไปข้างหน้า', gems: { ruby: 3, diamond: 1 } },
      { text: '🎓 ที่ปรึกษาที่ทุกคนวิ่งมาขอคำแนะนำ', gems: { sapphire: 3, emerald: 1 } },
      { text: '🤝 กาวใจที่ประสานทุกคนเข้าด้วยกัน', gems: { emerald: 3, citrine: 1 } },
      { text: '🎨 คนสร้างสรรค์ที่มีไอเดียแปลกใหม่เสมอ', gems: { amethyst: 3, citrine: 1 } },
    ],
  },
  {
    text: 'คุณรู้สึกมีพลังงานมากที่สุดเมื่อ...',
    options: [
      { text: '🎉 อยู่ท่ามกลางผู้คนและบรรยากาศสนุกสนาน', gems: { citrine: 3, ruby: 1 } },
      { text: '📚 ได้เรียนรู้สิ่งใหม่ๆ คนเดียวอย่างสงบ', gems: { sapphire: 3, obsidian: 1 } },
      { text: '🌱 ได้ช่วยเหลือและดูแลคนที่ตนรัก', gems: { emerald: 3, moonstone: 1 } },
      { text: '🌙 อยู่คนเดียวในความเงียบสงบ', gems: { obsidian: 3, amethyst: 1 } },
    ],
  },
  {
    text: 'เมื่อมีคนทำให้คุณเจ็บปวด คุณมักจะ...',
    options: [
      { text: '🔥 เผชิญหน้าและพูดตรงๆ ว่าคุณรู้สึกอย่างไร', gems: { ruby: 3, obsidian: 1 } },
      { text: '🧊 เก็บความรู้สึกไว้และค่อยๆ วิเคราะห์', gems: { obsidian: 3, sapphire: 1 } },
      { text: '💔 รู้สึกได้ลึกมากแต่พยายามเข้าใจเหตุผลของเขา', gems: { moonstone: 3, emerald: 1 } },
      { text: '✨ ปล่อยผ่านและมองหาด้านดีของสถานการณ์', gems: { citrine: 3, amethyst: 1 } },
    ],
  },
  {
    text: 'คุณคิดว่าความสำเร็จคือ...',
    options: [
      { text: '🏆 การเป็นที่สุดในสิ่งที่ทำ', gems: { diamond: 3, ruby: 1 } },
      { text: '💡 การค้นพบความรู้หรือความจริงที่ยิ่งใหญ่', gems: { sapphire: 3, amethyst: 1 } },
      { text: '❤️ การมีความสัมพันธ์ที่ดีและครอบครัวที่อบอุ่น', gems: { emerald: 3, moonstone: 1 } },
      { text: '😊 การมีความสุขและได้ทำสิ่งที่รักทุกวัน', gems: { citrine: 3, amethyst: 1 } },
    ],
  },
  {
    text: 'สิ่งที่คนอื่นมักชื่นชมในตัวคุณคือ...',
    options: [
      { text: '💪 ความกล้าและความมุ่งมั่นที่ไม่ยอมแพ้', gems: { ruby: 2, diamond: 2 } },
      { text: '🎯 ความแม่นยำและการวางแผนที่รอบคอบ', gems: { sapphire: 2, diamond: 2 } },
      { text: '🌸 ความอ่อนโยนและการรับฟังที่แท้จริง', gems: { emerald: 2, moonstone: 2 } },
      { text: '🌟 ความสดใสและพลังงานบวกที่ติดต่อได้', gems: { citrine: 2, ruby: 1, amethyst: 1 } },
    ],
  },
  {
    text: 'เมื่อต้องตัดสินใจสำคัญ คุณเชื่อใน...',
    options: [
      { text: '🔬 ข้อมูลและหลักฐานที่เป็นเหตุเป็นผล', gems: { sapphire: 3, diamond: 1 } },
      { text: '💫 สัญชาตญาณและความรู้สึกภายใน', gems: { moonstone: 3, amethyst: 1 } },
      { text: '❤️ สิ่งที่ทำให้คนรอบข้างมีความสุข', gems: { emerald: 3, citrine: 1 } },
      { text: '⚡ การลงมือทำทันทีโดยไม่ลังเล', gems: { ruby: 3, obsidian: 1 } },
    ],
  },
  {
    text: 'สีที่ดึงดูดใจคุณมากที่สุดคือ...',
    options: [
      { text: '🔴 แดงเข้ม ส้มสดใส — สีแห่งพลังและไฟ', gems: { ruby: 2, citrine: 1 } },
      { text: '🔵 น้ำเงินเข้ม เขียวครามทะเล — สีแห่งความลึก', gems: { sapphire: 2, obsidian: 1 } },
      { text: '💚 เขียวธรรมชาติ ม่วงอ่อน — สีแห่งชีวิต', gems: { emerald: 2, amethyst: 1 } },
      { text: '⚪ ขาวบริสุทธิ์ เงิน ทอง — สีแห่งแสง', gems: { diamond: 2, moonstone: 2 } },
    ],
  },
  {
    text: 'ในยามว่าง คุณชอบทำอะไรมากที่สุด?',
    options: [
      { text: '🏃 ออกกำลังกาย เล่นกีฬา หรือผจญภัย', gems: { ruby: 3, citrine: 1 } },
      { text: '📖 อ่านหนังสือ วิจัย หรือเรียนรู้สิ่งใหม่', gems: { sapphire: 3, diamond: 1 } },
      { text: '🎨 วาดรูป เขียน ดนตรี หรืองานสร้างสรรค์', gems: { amethyst: 3, moonstone: 1 } },
      { text: '☕ นั่งคุยกับเพื่อนสนิทหรืออยู่กับครอบครัว', gems: { emerald: 2, citrine: 2 } },
    ],
  },
  {
    text: 'ประโยคไหนที่ตรงกับตัวคุณที่สุด?',
    options: [
      { text: '"ฉันจะไม่หยุดจนกว่าจะถึงเป้าหมาย"', gems: { diamond: 3, ruby: 1 } },
      { text: '"ฉันต้องการเข้าใจทุกอย่างให้ลึกที่สุด"', gems: { sapphire: 3, obsidian: 1 } },
      { text: '"ขอให้ทุกคนรอบข้างฉันมีความสุขก็พอ"', gems: { emerald: 3, moonstone: 1 } },
      { text: '"ฉันแค่อยากใช้ชีวิตอย่างมีความสุขทุกวัน"', gems: { citrine: 3, amethyst: 1 } },
    ],
  },
];

// =============================================
// State
// =============================================
let scores = {};
let currentQ = 0;
let answers = [];

function resetScores() {
  scores = {};
  Object.keys(GEMS).forEach(k => (scores[k] = 0));
}

// =============================================
// Quiz Flow
// =============================================
function startQuiz() {
  resetScores();
  currentQ = 0;
  answers = [];
  showScreen('screen-quiz');
  renderQuestion();
}

function showScreen(id) {
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderQuestion() {
  const q = QUESTIONS[currentQ];
  document.getElementById('questionNum').textContent = currentQ + 1;
  document.getElementById('qTag').textContent = currentQ + 1;
  document.getElementById('questionText').textContent = q.text;

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectAnswer(i, opt.gems);
    grid.appendChild(btn);
  });

  // Progress
  const pct = ((currentQ) / QUESTIONS.length) * 100;
  document.getElementById('progressFill').style.width = Math.max(pct, 5) + '%';

  // Animate card
  const card = document.getElementById('questionCard');
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  setTimeout(() => {
    card.style.transition = 'all 0.4s ease';
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, 50);
}

function selectAnswer(idx, gems) {
  // Highlight selected
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.classList.toggle('selected', i === idx);
    b.disabled = true;
  });

  // Add scores
  Object.entries(gems).forEach(([gem, pts]) => {
    scores[gem] = (scores[gem] || 0) + pts;
  });
  answers.push(idx);

  // Delay before next
  setTimeout(() => {
    currentQ++;
    if (currentQ < QUESTIONS.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 500);
}

function showResult() {
  document.getElementById('progressFill').style.width = '100%';

  // Find winner
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const gem = GEMS[winner];

  // Set result
  document.getElementById('resultGemEmoji').textContent = gem.emoji;
  document.getElementById('resultGemName').textContent = gem.name;
  document.getElementById('resultGemLatin').textContent = gem.latin;
  document.getElementById('resultDesc').textContent = gem.desc;
  document.getElementById('resultLearnMore').href = gem.link;

  const traitsEl = document.getElementById('resultTraits');
  traitsEl.innerHTML = gem.traits.map(t => `<span class="result-trait-tag">${t}</span>`).join('');

  // Set glow class on body
  document.body.className = document.body.className.replace(/gem-\w+/, '') + ' ' + gem.cssClass;

  showScreen('screen-result');
}

function retakeQuiz() {
  document.body.className = document.body.className.replace(/gem-\w+/g, '');
  showScreen('screen-intro');
}
