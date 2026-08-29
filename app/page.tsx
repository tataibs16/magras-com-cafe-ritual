"use client";

import { useEffect } from "react";

const benefits = [
  {
    title: "Hidratação profunda",
    text: "Restaura a maciez e mantém a pele nutrida por muito mais tempo.",
  },
  {
    title: "Firmeza e elasticidade",
    text: "Ajuda a melhorar a sustentação e o toque da pele do abdômen.",
  },
  {
    title: "Textura mais uniforme",
    text: "Suaviza irregularidades e revela uma pele visivelmente mais lisa.",
  },
  {
    title: "Autocuidado possível",
    text: "Um ritual que cabe na rotina e transforma poucos minutos em presença.",
  },
  {
    title: "Cuidado direcionado",
    text: "Uma fórmula pensada para uma região que merece atenção e carinho.",
  },
];

const ingredients = [
  {
    name: "Cafeína",
    text: "Estimula a circulação e ajuda na aparência de uma pele mais firme.",
  },
  {
    name: "Centella asiática",
    text: "Auxilia na produção de colágeno e na regeneração da pele.",
  },
  {
    name: "Manteiga de cupuaçu",
    text: "Nutre profundamente e melhora a elasticidade com toque aveludado.",
  },
  {
    name: "Amêndoas + vitamina E",
    text: "Promove hidratação intensa e ajuda a proteger a pele.",
  },
];

const ritualSteps = [
  {
    number: "01",
    cue: "gesto",
    title: "Aplique",
    text: "Pele limpa, depois do banho. Espalhe o creme pelo abdômen sem pressa.",
    image: "/campaign/application.jpg",
    imageClass: "ritual-lifestyle ritual-apply",
  },
  {
    number: "02",
    cue: "cuidado",
    title: "Massageie",
    text: "Movimentos circulares, toque firme e alguns minutos só seus.",
    image: "/campaign/leg-ritual.jpg",
    imageClass: "ritual-lifestyle ritual-massage",
  },
  {
    number: "03",
    cue: "hábito",
    title: "Leve para a rotina",
    text: "Antes de sair, depois do pilates ou no fim do dia: constância é o segredo.",
    image: "/campaign/reformer.jpg",
    imageClass: "ritual-lifestyle ritual-routine",
  },
];

const testimonials = [
  {
    tag: "Hidratação sentida",
    quote:
      "A pele fica super hidratada, macia e com um aspecto mais firme. Virou parte do meu ritual diário.",
    name: "Juliana M.",
    age: "34 anos",
  },
  {
    tag: "Textura que fica",
    quote:
      "A textura absorve rápido e o cheirinho é maravilhoso. Me sinto mais cuidada e confiante todos os dias.",
    name: "Caroline R.",
    age: "29 anos",
  },
  {
    tag: "Ritual incorporado",
    quote:
      "Percebi diferença na textura da pele e aquele toque aveludado que a gente ama. Não fico mais sem.",
    name: "Fernanda L.",
    age: "36 anos",
  },
];

const faqs = [
  {
    question: "O Body Cream Barriguinha ajuda na flacidez?",
    answer:
      "A fórmula reúne ativos hidratantes e antioxidantes que ajudam a melhorar a aparência, a firmeza e a elasticidade da pele. Os resultados variam conforme a pele e a constância de uso.",
  },
  {
    question: "Quanto tempo leva para perceber resultados?",
    answer:
      "A hidratação e a maciez podem ser percebidas desde as primeiras aplicações. Mudanças na textura e na aparência de firmeza tendem a aparecer com o uso diário e contínuo.",
  },
  {
    question: "Posso usar durante a gravidez?",
    answer:
      "Por conter cafeína, recomendamos apresentar a lista de ingredientes ao profissional que acompanha a gestação ou amamentação antes de iniciar o uso.",
  },
  {
    question: "O produto possui cafeína. Ele tem contraindicações?",
    answer:
      "O uso é tópico e externo. Pessoas com sensibilidade a algum componente da fórmula devem evitar o produto; em caso de dúvida, faça um teste em pequena área e consulte um profissional.",
  },
  {
    question: "Pode ser usado em outras áreas do corpo?",
    answer:
      "Sim. Embora tenha sido pensado para o abdômen, pode ser aplicado em outras regiões que precisam de hidratação, respeitando as orientações do rótulo e evitando mucosas.",
  },
  {
    question: "O produto é testado em animais?",
    answer:
      "Não. A proposta da fórmula é oferecer um cuidado vegano, livre de parabenos e não testado em animais.",
  },
];

function Brand({ stacked = false }: { stacked?: boolean }) {
  return (
    <a
      className={`brand${stacked ? " brand-stacked" : ""}`}
      href="#inicio"
      aria-label="Magras com Café — início"
    >
      <img
        src={stacked ? "/brand-stacked.webp" : "/brand-horizontal.webp"}
        alt="Magras com Café"
      />
    </a>
  );
}

export default function Home() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const observer = reducedMotion || !("IntersectionObserver" in window)
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
        );

    revealItems.forEach((item) => observer?.observe(item));

    let frame = 0;
    const updateScrollEffects = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      if (!reducedMotion) {
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((item) => {
          const rect = item.getBoundingClientRect();
          const distance = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
          const strength = Number(item.dataset.parallax || 18);
          item.style.setProperty(
            "--parallax-y",
            `${Math.max(-1, Math.min(1, distance)) * strength}px`,
          );
        });
      }
    };

    const requestScrollUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollEffects);
    };

    updateScrollEffects();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main id="inicio">
      <div className="scroll-progress" aria-hidden="true" />

      <section className="hero">
        <header className="site-header page-shell">
          <Brand />
          <nav aria-label="Navegação principal">
            <a href="#ritual">Ritual</a>
            <a href="#sobre">Manifesto</a>
            <a href="#ingredientes">Fórmula</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="button button-small" href="#comprar">
            Quero o meu
          </a>
        </header>

        <div className="hero-art" aria-hidden="true">
          <span className="hero-side-note">body care · daily ritual · 2026</span>
        </div>

        <div className="hero-copy page-shell">
          <div className="hero-copy-inner">
            <p className="eyebrow">Presença antes de perfeição</p>
            <h1>
              Cuidado que<br />começa no corpo
              <span>e continua na confiança.</span>
            </h1>
            <p className="hero-description">
              Uma fórmula concentrada para hidratar, melhorar a textura da pele
              e transformar o cuidado com o abdômen em um ritual só seu.
            </p>
            <p className="hero-script" aria-hidden="true">do seu jeito, todos os dias</p>
            <div className="hero-buttons">
              <a className="button" href="#comprar">
                Quero meu ritual
              </a>
              <a className="text-link" href="#sobre">
                Conhecer a experiência <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-trust">
          <div className="page-shell">
            <span>01 · depois do banho</span>
            <span>02 · antes do café</span>
            <span>03 · no seu ritmo</span>
          </div>
        </div>
      </section>

      <div className="campaign-opening">
      <section className="benefits" aria-labelledby="benefits-title">
        <div className="page-shell benefits-editorial">
          <div className="section-intro" data-reveal="up">
            <p className="eyebrow">Textura que encontra a rotina</p>
            <h2 id="benefits-title">
              <span>O cuidado fica.</span>
              <span>O dia continua.</span>
            </h2>
            <p>
              Hidratação, toque e presença em uma fórmula que acompanha o seu
              movimento — sem pedir que a vida pare.
            </p>
          </div>

          <figure className="benefits-life-window" data-reveal="clip">
            <img
              src="/campaign/hand-product.jpg"
              alt="Body Cream na mão durante uma pausa com café"
              loading="lazy"
              data-parallax="16"
            />
            <figcaption>
              <span>08:42</span>
              entre o cuidado e o próximo compromisso
            </figcaption>
          </figure>

          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <article
                className="benefit-card"
                data-reveal="up"
                style={{ transitionDelay: `${(index + 1) * 55}ms` }}
                key={benefit.title}
              >
                <span className="benefit-accent" aria-hidden="true" />
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
          <span className="benefits-ghost" aria-hidden="true">presença</span>
        </div>
      </section>

      <section className="social-storyboard" aria-labelledby="lifestyle-title">
        <div className="social-storyboard-heading page-shell" data-reveal="up">
          <div>
            <p className="eyebrow">Do espelho para a rua</p>
            <h2 id="lifestyle-title">Não é sobre parar o dia. É sobre caber nele.</h2>
          </div>
          <div className="social-storyboard-lead">
            <p className="script-accent" aria-hidden="true">um ritual em movimento</p>
            <p>
              Pilates, café, banho, bolsa, bancada. O Body Cream vive onde a
              rotina acontece — e transforma cuidado em uma cena que dá vontade
              de repetir.
            </p>
          </div>
        </div>

        <div className="storyboard-viewport" aria-label="Recortes de uma rotina com o Body Cream">
          <div className="storyboard-rail">
            <figure className="storyboard-card storyboard-pilates" data-reveal="clip">
              <img
                src="/campaign/pilates-exit.jpg"
                alt="Mulher saindo do pilates com café gelado e o Body Cream na bolsa"
                loading="lazy"
                data-parallax="14"
              />
              <figcaption><span>pós-pilates</span> corpo em movimento</figcaption>
            </figure>

            <figure className="storyboard-card storyboard-coffee" data-reveal="clip">
              <img
                src="/campaign/iced-coffee.jpg"
                alt="Body Cream aberto ao lado de café gelado, bolsa e fones"
                loading="lazy"
                data-parallax="20"
              />
              <figcaption><span>primeira pausa</span> café na mão</figcaption>
            </figure>

            <figure className="storyboard-card storyboard-product" data-reveal="up">
              <img
                src="/campaign/gym-bag.jpg"
                alt="Body Cream dentro da bolsa com acessórios da rotina de pilates"
                loading="lazy"
              />
              <figcaption><span>vai com você</span> dentro da rotina</figcaption>
            </figure>

            <figure className="storyboard-card storyboard-body" data-reveal="clip">
              <img
                src="/campaign/reformer.jpg"
                alt="Body Cream aberto na rotina de uma aula de pilates"
                loading="lazy"
                data-parallax="16"
              />
              <figcaption><span>corpo aquecido</span> cuidado depois da aula</figcaption>
            </figure>

            <article className="storyboard-card storyboard-note" data-reveal="up">
              <img src="/brand-wave.webp" alt="" aria-hidden="true" />
              <p className="eyebrow">Da bancada para o feed</p>
              <h3>Uma rotina que dá vontade de viver — e de compartilhar.</h3>
              <p>
                Um ritual com textura, gesto e estética para viver em conteúdos
                de beleza, café, corpo e autocuidado.
              </p>
              <span>feito para sentir · pronto para compartilhar</span>
            </article>
          </div>
        </div>

        <div className="storyboard-footer page-shell" data-reveal="up">
          <p>da pele para a vida real</p>
          <div>
            <span>pós-banho</span>
            <span>pilates</span>
            <span>café</span>
            <span>rotina urbana</span>
            <span>conteúdo que aproxima</span>
          </div>
        </div>
      </section>
      </div>

      <div className="care-campaign-flow">
      <section className="sensory-break" aria-label="Manifesto sensorial do Body Cream">
        <figure className="sensory-image" data-reveal="clip">
          <img
            src="/campaign/skin-macro.jpg"
            alt="Close de pele real aquecida pela luz natural com o Body Cream aberto"
            loading="lazy"
            data-parallax="18"
          />
        </figure>
        <div className="sensory-copy" data-reveal="right">
          <span aria-hidden="true">pele</span>
          <p className="eyebrow">Calor que vira presença</p>
          <h2>Seu corpo não pausa. Seu cuidado também não precisa.</h2>
          <p>
            Luz na pele, creme no toque e a sensação de levar alguns minutos
            seus para o resto do dia.
          </p>
        </div>
      </section>

      <section className="story" id="sobre" aria-labelledby="story-title">
        <div className="story-photo" data-reveal="clip">
          <img
            src="/body-cream-ritual.png"
            alt="Mulher aplicando creme na região do abdômen"
            loading="lazy"
          />
          <span className="story-photo-caption">um gesto seu, todos os dias</span>
        </div>
        <div className="story-copy" data-reveal="right">
          <img className="story-watermark" src="/brand-mark.webp" alt="" aria-hidden="true" />
          <p className="eyebrow">Mais que um creme, um ritual</p>
          <h2 id="story-title">Seu corpo merece presença, não perfeição.</h2>
          <p className="script-accent story-script" aria-hidden="true">presença na própria pele</p>
          <p>
            Body Cream Barriguinha nasceu para acompanhar a mulher que sai do
            banho, abre a janela, pega o café e segue. Um gesto de cuidado que
            fica na pele e encontra espaço na vida real.
          </p>
          <div className="story-signature">
            <span>Depois do banho</span>
            <span>Antes de sair</span>
          </div>
        </div>
        <div className="story-product-stage" data-reveal="up" data-parallax="-12" aria-hidden="true">
          <img
            className="story-product"
            src="/open-product.webp"
            alt=""
            loading="lazy"
          />
        </div>
      </section>

      <section
        className="ingredients-section"
        id="ingredientes"
        aria-labelledby="ingredients-title"
      >
        <img className="ingredients-wave" src="/brand-wave.webp" alt="" aria-hidden="true" />
        <div className="page-shell ingredients-layout">
          <div className="ingredients-intro" data-reveal="right">
            <p className="eyebrow">Natureza + ciência</p>
            <p className="script-accent ingredients-script" aria-hidden="true">a pele reconhece</p>
            <h2 id="ingredients-title">
              Ativos escolhidos para nutrir, firmar e acolher sua pele.
            </h2>
            <p>
              Uma combinação de ingredientes naturais e ativos eficazes,
              pensada para o cuidado diário do abdômen.
            </p>
            <div className="formula-badges" aria-label="Características da fórmula">
              <span>Vegano</span>
              <span>Sem parabenos</span>
              <span>Cruelty free</span>
            </div>
          </div>

          <div className="ingredient-visual" data-reveal="up">
            <img
              src="/ingredients-still-life.png"
              alt="Creme corporal com café, cupuaçu e amêndoas"
              loading="lazy"
            />
            <span>textura que acolhe</span>
          </div>

          <div className="ingredient-list">
            {ingredients.map((ingredient, index) => (
              <article
                data-reveal="up"
                style={{ transitionDelay: `${index * 70}ms` }}
                key={ingredient.name}
              >
                <span className="ingredient-mark" aria-hidden="true">—</span>
                <div>
                  <h3>{ingredient.name}</h3>
                  <p>{ingredient.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ritual-section" id="ritual" aria-labelledby="ritual-title">
        <div className="page-shell">
          <div className="section-heading" data-reveal="up">
            <div>
              <p className="eyebrow">Como usar</p>
              <p className="script-accent ritual-script" aria-hidden="true">do gesto ao hábito</p>
              <h2 id="ritual-title">Do toque ao hábito. Do hábito para a vida.</h2>
            </div>
            <p>
              A lógica é simples: tocar, cuidar, repetir. A experiência é toda
              sua — e começa na pele.
            </p>
          </div>

          <div className="ritual-grid">
            {ritualSteps.map((step) => (
              <article
                className="ritual-step"
                data-reveal="up"
                style={{ transitionDelay: `${Number(step.number) * 70}ms` }}
                key={step.number}
              >
                <div className="step-media">
                  <img
                    className={step.imageClass}
                    src={step.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span className="step-cue">{step.cue}</span>
                </div>
                <div className="step-copy">
                  <span className="step-order" aria-hidden="true">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>

      <section className="proof-section" id="conteudo" aria-labelledby="proof-title">
        <div className="page-shell proof-scene">
          <figure className="proof-life-photo" data-reveal="clip">
            <img
              src="/campaign/mirror.jpg"
              alt="Mulher segurando o Body Cream diante do espelho com café ao lado"
              loading="lazy"
              data-parallax="18"
            />
            <figcaption>rotina real · cuidado incorporado</figcaption>
          </figure>

          <div className="proof-intro" data-reveal="up">
            <div>
              <p className="eyebrow">Quem usa, sente</p>
              <p className="script-accent proof-script" aria-hidden="true">pele real, rotina real</p>
              <h2 id="proof-title">
                O que fica é a sensação de se cuidar.
              </h2>
            </div>
            <p>
              Os números ajudam a medir. As histórias contam o que importa:
              maciez, confiança e um ritual que virou parte do dia.
            </p>
          </div>

          <blockquote className="voice-featured" data-reveal="right">
            <span className="voice-label">{testimonials[0].tag}</span>
            <p>“{testimonials[0].quote}”</p>
            <footer>
              <strong>{testimonials[0].name}</strong>
              <span>{testimonials[0].age}</span>
            </footer>
          </blockquote>

          <div className="voice-pair">
            {testimonials.slice(1).map((testimonial, index) => (
              <blockquote
                data-reveal="up"
                style={{ transitionDelay: `${(index + 1) * 90}ms` }}
                key={testimonial.name}
              >
                <span className="voice-label">{testimonial.tag}</span>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.age}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="proof-stats" aria-label="Resultados da pesquisa com consumidoras">
            <div data-reveal="up">
              <strong>97<sup>%</sup></strong>
              <span>perceberam melhora na hidratação da pele</span>
            </div>
            <div data-reveal="up" style={{ transitionDelay: "70ms" }}>
              <strong>94<sup>%</sup></strong>
              <span>sentiram a pele mais firme e macia</span>
            </div>
            <div data-reveal="up" style={{ transitionDelay: "140ms" }}>
              <strong>91<sup>%</sup></strong>
              <span>recomendariam para outras mulheres</span>
            </div>
          </div>

          <p className="research-note">
            *Pesquisa realizada com consumidoras após 30 dias de uso.
          </p>
        </div>
      </section>

      <section className="faq-section" id="duvidas" aria-labelledby="faq-title">
        <div className="page-shell faq-layout" data-reveal="up">
          <div className="faq-heading">
            <p className="eyebrow">Sem dúvida, com cuidado</p>
            <h2 id="faq-title">Antes de começar o seu ritual.</h2>
            <img src="/brand-wave.webp" alt="" aria-hidden="true" />
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span className="faq-number">0{index + 1}</span>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="purchase-section" id="comprar" aria-labelledby="purchase-title">
        <div className="purchase-image" data-reveal="clip">
          <img
            src="/campaign/car.jpg"
            alt="Body Cream ao lado de café gelado, bolsa e chaves dentro do carro"
            loading="lazy"
          />
        </div>
        <div className="purchase-copy" data-reveal="right">
          <p className="eyebrow">Escolha você. Escolha constância.</p>
          <h2 id="purchase-title">Seu ritual começa agora.</h2>
          <p>
            Um cuidado sensorial, direcionado e possível para se sentir bem
            todos os dias.
          </p>
          <a className="button button-light" href="#inicio">
            Quero meu Body Cream
          </a>
          <div className="purchase-trust">
            <span>Compra segura</span>
            <span>Envio para todo Brasil</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <Brand stacked />
          <div>
            <h2>Navegação</h2>
            <a href="#ritual">Ritual</a>
            <a href="#sobre">Manifesto</a>
            <a href="#ingredientes">Fórmula</a>
            <a href="#duvidas">Dúvidas</a>
          </div>
          <div>
            <h2>Informações</h2>
            <a href="#duvidas">Trocas e devoluções</a>
            <a href="#duvidas">Privacidade</a>
            <a href="#duvidas">Termos de uso</a>
          </div>
          <div>
            <h2>Acompanhe</h2>
            <div className="social-links">
              <a href="#inicio" aria-label="Instagram">Instagram</a>
              <a href="#inicio" aria-label="TikTok">TikTok</a>
              <a href="#inicio" aria-label="YouTube">YouTube</a>
            </div>
          </div>
          <p className="copyright">
            © 2026 Magras com Café.<br />Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <a className="mobile-cta" href="#comprar">Quero meu Body Cream</a>
    </main>
  );
}
