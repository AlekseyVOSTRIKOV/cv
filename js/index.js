const toolsSlider = new Splide('#toolsSlider', {
  type: 'loop', //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: '2rem', //1 rem default
  // rewind: true,
  speed: 2000, //transition in milliseconds
  // fixedWidth: '10vw',
  // width: '100vw',
  perPage: 3,
  // start: 1,
  perMove: 2,
  autoplay: true,
  interval: 3000,
  arrows: false,
  pagination: false,
  pauseOnHover: true,
  wheel: true,
  breakpoints: {
    690: {
      perPage: 1,
    },
    992: {
      perPage: 2,
      gap: '1rem',
    }
  },
});

toolsSlider.mount();