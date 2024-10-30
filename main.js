const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  };

const animateAlice = (element) => {
    element.animate(aliceTumbling, aliceTiming).finished.then(() => {
        if (element === alice1) {
            animateAlice(alice2);
        } else if (element === alice2) {
            animateAlice(alice3);
        } else if (element === alice3) {
            alice3.animate(aliceTumbling, { ...aliceTiming, direction: 'reverse' }).finished.then(() => {
                alice2.animate(aliceTumbling, { ...aliceTiming, direction: 'reverse' }).finished.then(() => {
                    alice1.animate(aliceTumbling, { ...aliceTiming, direction: 'reverse' }).finished.then(() => {
                        // 动画结束
                    });
                });
            });
        }
    });
};

animateAlice(alice1);
