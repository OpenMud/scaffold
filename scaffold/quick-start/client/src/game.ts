import { MudGame, SvrWorldEchoMessage } from "openmud";
import { GameIconAnimationsIndex, GameSounds, GameIcons, GameResourceLoader } from './resources';

export interface WorldMessage {
  (message: string): void
}

export class Game extends MudGame {

  public worldMessage: WorldMessage | undefined;

  constructor(canvas: string) {
    super(canvas, GameResourceLoader, GameSounds, GameIcons, GameIconAnimationsIndex);
    this.rootScene.on('worldEcho', t => { 
      this.worldMessage?.call(this, (t as SvrWorldEchoMessage)!.message)
    });

    this.rootScene.on('entityEcho', t => {
      this.worldMessage?.call(this, (t as SvrWorldEchoMessage)!.message)
    });
  }
}