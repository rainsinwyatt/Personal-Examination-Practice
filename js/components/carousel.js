/**
 * carousel.js —— 首页学科轮播
 * 自动播放 + 左右箭头 + 圆点，鼠标悬停时暂停。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  class Carousel {
    constructor(root, subjects) {
      this.root = root;
      this.items = subjects || [];
      this.index = 0;
      this.timer = null;
      this.interval = 6500;
    }

    render() {
      if (!this.root || !this.items.length) return;

      this.root.innerHTML = `
        <div class="carousel" tabindex="0" role="region" aria-label="学科轮播" aria-roledescription="carousel">
          <div class="carousel__track">
            ${this.items.map((item, i) => this.slideHtml(item, i)).join('')}
          </div>
          <button class="carousel__arrow carousel__arrow--prev" data-dir="-1" aria-label="上一个">‹</button>
          <button class="carousel__arrow carousel__arrow--next" data-dir="1" aria-label="下一个">›</button>
          <div class="carousel__dots">
            ${this.items
              .map(
                (_, i) =>
                  `<button class="dot${i === 0 ? ' is-on' : ''}" data-go="${i}" aria-label="第 ${i + 1} 个学科"></button>`
              )
              .join('')}
          </div>
        </div>`;

      this.bind();
      this.start();
    }

    slideHtml(subject, index) {
      const stat = Data.subjectStat(subject.id);
      return `
        <div class="carousel__slide" aria-hidden="${index === 0 ? 'false' : 'true'}">
          <div class="slide">
            <div>
              <div class="slide__top">
                <span class="slide__index">${String(index + 1).padStart(2, '0')} / ${String(this.items.length).padStart(2, '0')}</span>
                <span class="badge badge--accent">${U.esc(subject.short)}</span>
              </div>
              <div class="slide__name mt-8">${U.esc(subject.name)}</div>
              <p class="slide__desc">${U.esc(subject.description)}</p>
              <div class="slide__meta">
                <span>题库 <b>${stat.questionCount}</b> 题</span>
                <span>章节 <b>${stat.chapterCount}</b> 章</span>
                <span>知识点 <b>${stat.kpCount}</b> 个</span>
              </div>
            </div>
            <div class="slide__foot">
              <div class="row gap-8">
                ${subject.tags.map((tag) => `<span class="chip">${U.esc(tag)}</span>`).join('')}
              </div>
              <button class="btn btn--primary" data-enter="${subject.id}">进入题库 →</button>
            </div>
          </div>
        </div>`;
    }

    bind() {
      this.root.querySelectorAll('[data-dir]').forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.stopPropagation();
          this.move(Number(btn.dataset.dir));
        });
      });

      this.root.querySelectorAll('[data-go]').forEach((dot) => {
        dot.addEventListener('click', () => this.goTo(Number(dot.dataset.go)));
      });

      this.root.querySelectorAll('[data-enter]').forEach((btn) => {
        btn.addEventListener('click', () => KY.Router.go(`/banks/${btn.dataset.enter}`));
      });

      // 悬停暂停，离开继续
      const carousel = this.root.querySelector('.carousel');
      carousel.addEventListener('mouseenter', () => this.stop());
      carousel.addEventListener('mouseleave', () => this.start());
      carousel.addEventListener('focusin', () => this.stop());
      carousel.addEventListener('focusout', (event) => {
        if (!carousel.contains(event.relatedTarget)) this.start();
      });
      carousel.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') this.move(-1);
        if (event.key === 'ArrowRight') this.move(1);
      });
    }

    move(step) {
      const total = this.items.length;
      this.goTo((this.index + step + total) % total);
    }

    goTo(index) {
      this.index = index;
      const track = this.root.querySelector('.carousel__track');
      if (track) track.style.transform = `translateX(-${index * 100}%)`;

      U.$$('.dot', this.root).forEach((dot, i) => {
        dot.classList.toggle('is-on', i === index);
      });
      U.$$('.carousel__slide', this.root).forEach((slide, i) => {
        const current = i === index;
        slide.setAttribute('aria-hidden', current ? 'false' : 'true');
        if (current) slide.removeAttribute('inert');
        else slide.setAttribute('inert', '');
      });
    }

    start() {
      this.stop();
      this.timer = setInterval(() => this.move(1), this.interval);
    }

    stop() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }

    destroy() {
      this.stop();
    }
  }

  KY.Carousel = Carousel;
})(window.KY);
