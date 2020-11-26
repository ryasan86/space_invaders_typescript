import { earth, state, player, invaders } from './app';
import { rectOf, checkCollision } from './utils';

class PlayerBullet {
    node = document.createElement('div');
    bullets: PlayerBullet[];

    constructor (x: number, bullets: PlayerBullet[]) {
        this.node.className = 'bullet';
        this.node.style.cssText = `top: 0; left: ${x}px`;
        this.bullets = bullets;
    }

    remove = (): void => {
        this.bullets.splice(this.bullets.indexOf(this), 1);
        this.node.remove();
    };

    checkForHitOnInvader = (): void => {
        const rect1 = rectOf(this.node);
        let invader: any;

        for (const i in invaders.matrix) {
            for (const j in invaders.matrix) {
                invader = invaders.matrix[i][j];
                const rect2 = invader ? rectOf(invader.element()) : null;

                // prettier-ignore
                if (invader && checkCollision(rect1, rect2)) {
                    this.remove();
                    player.scorePoints();
                    invaders.removeInvader(invader);
                }

                if (this.node.offsetTop <= -earth.offsetHeight) {
                    this.remove();
                }
            }
        }
    };

    update = (): void => {
        if (!state.isPaused) {
            this.node.style.top = `${this.node.offsetTop - 5}px`;
            this.checkForHitOnInvader();
        }

        requestAnimationFrame(this.update);
    };

    element = (): HTMLElement => {
        return this.node;
    };
}

export default PlayerBullet;
