import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="min-h-screen display flex items-center justify-center">
      <h1 class="text-9xl">GSAP</h1>
    </div>
    <h2 class="text-5xl mt-12">GSAPとは</h2>
    <p data-gsap-text-typo class="mt-3">
      GSAP（GreenSock Animation Platform）は、Webアニメーションを簡単に実装できるライブラリです。<br />
      読み方は「ジーサップ」です。<br />
    </p>
    <h2 class="text-2xl mt-12">GSAPの特徴</h2>
    <ul class="list-disc list-inside mt-3">
      <li class="text-xl">高性能で軽量</li>
      <li class="text-xl">シンプルなAPI</li>
      <li class="text-xl">豊富な機能</li>
      <li class="text-xl">ブラウザの互換性が高い</li>
    </ul>
    <h2 class="text-5xl mt-12">GSAPの使い方</h2>
    <h3 class="text-3xl mt-8">TWEEN</h3>
    <p class="mt-4">GSAPの基本的な使い方は、TWEENを使ってアニメーションを設定することです。</p>
    <h4 class="text-2xl mt-2">主なメソッド</h4>
    <ul class="list-disc list-inside mt-3">
      <li class="text-xl">gsap.to()</li>
      <li class="text-xl">gsap.from()</li>
      <li class="text-xl">gsap.fromTo()</li>
    </ul>
    <h4 class="text-2xl mt-2">主なプロパティ</h4>
    <ul class="list-disc list-inside mt-3">
      <li class="text-xl">duration</li>
      <li class="text-xl">delay</li>
      <li class="text-xl">ease</li>
      <li class="text-xl">repeat</li>
    </ul>
    <h4 class="text-2xl mt-2">主なイージング</h4>
    <ul class="list-disc list-inside mt-3">
      <li class="text-xl">linear</li>
      <li class="text-xl">power1</li>
      <li class="text-xl">power2</li>
      <li class="text-xl">power3</li>
      <li class="text-xl">power4</li>
      <li class="text-xl">back</li>
      <li class="text-xl">elastic</li>
      <li class="text-xl">bounce</li>
    </ul>
    <h3 class="text-3xl mt-10">サンプル</h3>
    <div class="mt-5 min-h-screen">
      <h4 class="text-2xl">HTML要素の簡単なアニメーション</h4>
      <div>
        <h5 class="text-xl mt-3 mb-3">要素を回転させる</h5>
        <div class="grid grid-cols-2 gap-5">
          <div class="flex items-center justify-center">
            <div data-gsap-rotate class="w-40 h-40 bg-red-300"></div>
          </div>
          <div class="flex items-center justify-center">
            <pre class="m-0 p-0"><code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4">
              <span>gsap.to('[data-gsap-rotate]', {
    duration: 10,
    rotate: 360,
    repeat: -1,
    ease: 'linear',
  });<span>
            </code></pre>
          </div>
        </div>
        <h5 class="text-xl mt-10 mb-3">要素をフェードインさせる</h5>
        <div class="grid grid-cols-2 gap-5 mt-10">
          <div class="flex items-center justify-center">
            <div data-gsap-fade-in class="w-40 h-40 bg-red-300 pointer-events-none opacity-0"></div>
          </div>
          <div class="flex items-center justify-center flex-col">
            <button data-gsap-fade-in-start class="text-sm flex-1 bg-gray-300 p-2" type="button">フェードイン</button>
            <pre class="mt-2 p-0"><code class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4">
              <span>gsap.fromTo(
  '[data-gsap-fade-in]',
  {
    opacity: 0,
    y: 50,
  },
  {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power2.out',
  }
);</span>
              </code>
            </pre>
          </div>
        </div>
      <div>
    </div>
    <div class="mt-5 min-h-screen">
      <h3 class="text-3xl mt-12">Timeline</h3>
      <p class="mt-4">Timelineではアニメーションの再生や一時停止、逆再生などを制御することができます。</p>
      <div class="flex justify-between mt-5">
        <button data-gsap-timeline-pause class="text-sm flex-1 bg-gray-300 p-2" type="button">pause<br />(一時停止)</button>
        <button data-gsap-timeline-play class="text-sm flex-1 bg-gray-300 p-2 ml-2" type="button">play<br />(再生)</button>
        <button data-gsap-timeline-progress class="text-sm flex-1 bg-gray-300 p-2 ml-2" type="button">progress<br />(進行度)0~1</button>
        <button data-gsap-timeline-restart class="text-sm flex-1 bg-gray-300 p-2 ml-2" type="button">restart<br />(リスタート)</button>
        <button data-gsap-timeline-reverse class="text-sm flex-1 bg-gray-300 p-2 ml-2" type="button">reverse<br />(逆再生)</button>
        <button data-gsap-timeline-seek class="text-sm flex-1 bg-gray-300 p-2 ml-2" type="button">seek<br />(指定時間に移動)</button>
      </div>
      <div class="mt-5 flex items-end h-100 relative">
        <div data-gsap-timeline class="bg-red-100 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-200 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-300 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-400 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-500 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-600 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-700 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-800 flex-1 h-full"></div>
        <div data-gsap-timeline class="bg-red-900 flex-1 h-full"></div>
      </div>
    </div>
    <h2 class="text-5xl mt-12">その他DEMO</h2>
    <h3 class="text-3xl mt-8">ScrollTrigger</h3>
    <p class="mt-4">ScrollTriggerはスクロールに応じてアニメーションを制御することができるプラグインです。</p>
    <div data-gsap-scroll-trigger class="mt-5 pt-24 min-h-screen">
      <div data-gsap-scroll-trigger-item class="bg-red-300 w-full h-50"></div>
    </div>
    <div data-gsap-pin-trigger class="mt-5 min-h-screen">
      <div data-gsap-pin class="bg-red-300 w-full h-full origin-top"></div>
    </div>
  </div>
`;

gsap.to('[data-gsap-rotate]', {
  duration: 3,
  rotate: 360,
  repeat: -1,
  ease: 'linear',
});

const fadeInStartButton = document.querySelector<HTMLButtonElement>(
  '[data-gsap-fade-in-start]'
)!;

fadeInStartButton.addEventListener('click', () => {
  gsap.fromTo(
    '[data-gsap-fade-in]',
    {
      opacity: 0,
      y: 50,
    },
    {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    }
  );
});

const timeline = gsap.timeline({ repeat: 0 });

timeline.to('[data-gsap-timeline]', {
  height: 0,
  duration: 5,
  delay: 'random',
  ease: 'bounce',
  stagger: {
    from: 'random',
    each: 0.1,
  },
});

document
  .querySelector<HTMLButtonElement>('[data-gsap-timeline-pause]')!
  .addEventListener('click', () => {
    timeline.pause();
  });

document
  .querySelector<HTMLButtonElement>('[data-gsap-timeline-play]')!
  .addEventListener('click', () => {
    timeline.play();
  });

document
  .querySelector<HTMLButtonElement>('[data-gsap-timeline-progress]')!
  .addEventListener('click', () => {
    timeline.progress(Math.random());
  });

document
  .querySelector<HTMLButtonElement>('[data-gsap-timeline-restart]')!
  .addEventListener('click', () => {
    timeline.restart();
  });

document
  .querySelector<HTMLButtonElement>('[data-gsap-timeline-reverse]')!
  .addEventListener('click', () => {
    timeline.reverse();
  });

document
  .querySelector<HTMLButtonElement>('[data-gsap-timeline-seek]')!
  .addEventListener('click', () => {
    timeline.seek(Math.random() * 5);
  });

gsap.registerPlugin(ScrollTrigger);

const scrollTriggerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '[data-gsap-scroll-trigger]',
    start: 'top center',
  },
});

scrollTriggerTimeline.fromTo(
  '[data-gsap-scroll-trigger-item]',
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
  }
);

const pinTriggerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '[data-gsap-pin-trigger]',
    start: 'top top',
    end: 'bottom center',
    pin: true,
    scrub: true,
  },
});

pinTriggerTimeline.fromTo(
  '[data-gsap-pin]',
  {
    scale: 0.6,
  },
  {
    scale: 1,
  }
);
