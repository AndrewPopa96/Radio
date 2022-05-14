/* eslint-disable react/prop-types */
import { Media, Player, controls } from "react-media-player";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { withModifiers } from "../../helpers/withModifiers";
const { PlayPause, SeekBar, Duration, MuteUnmute, Volume } = controls;

const MediaPlayer = ({
  src,
  playable = true,
  title,
  variant,
  autoplay = false,
}) => (
  <Media>
    <div className={classNames(withModifiers("media", variant, styles))}>
      <div className={styles.details}>
        <div className={styles.thumbnail}>
          <img
            className={styles.image}
            src={`https://img.youtube.com/vi/${src}/hqdefault.jpg`}
          />
        </div>

        <div>
          {title && <h3>{title}</h3>}
          {!playable && (
            <Duration src={`http://www.youtube.com/embed/${src}`} />
          )}
        </div>
      </div>

      {playable && (
        <div className="media-player">
          <Player
            autoPlay={autoplay}
            useAudioObject
            src={`http://www.youtube.com/embed/${src}`}
          />
          <PlayPause />

          <SeekBar />
          <Duration />
          <Volume />
          <MuteUnmute />
        </div>
      )}
    </div>
  </Media>
);

export default MediaPlayer;
