import { CanvasManager } from "../classes/canvas-manager.ts";
import { TILE_SIZE } from "../lib/constants.ts";

export class CanvasItemNode {
    tileSize = TILE_SIZE;
    // Matrix coordinate of X
    tileX: number;
    // Matrix coordinate of Y
    tileY: number;
    // Canvas coordinate of X
    x: number;
    // Canvas coordinate of Y
    y: number;
    ctx = CanvasManager.getInstance().ctx;
    direction: 'up' | 'down' | 'left' | 'right' = 'down';

    constructor(x: number, y: number, tileX: number, tileY: number) {
        this.x = x;
        this.y = y;
        this.tileX = tileX;
        this.tileY = tileY;
    }

    /**
     * Called when the node should draw on the canvas
     * @abstract
     * @return void
     */
    draw() {
    }

    /**
     * Called when the node should update its state
     * @abstract
     * @param deltaTime {number}
     */
    update(deltaTime?: number) {
    }

    checkCollision(node: CanvasItemNode): boolean {
        return this.tileX === node.tileX && this.tileY === node.tileY
    }
}
