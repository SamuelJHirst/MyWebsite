import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  background: {
    width: '100%',
    height: '100%',
    objectPosition: 'center',
    objectFit: 'cover',
  },
  overlay: {
    width: '75%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.6,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  content: {
    width: '75%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#CCC',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

interface BackgroundOverlayProps {
  src: any;
  alt: string;
  children: any;
}

function BackgroundOverlay(props: BackgroundOverlayProps) {
  const { src, alt, children } = props;
  const styles = useStyles();

  return (
    <div className={styles.root}>
        <img src={src} alt={alt} className={styles.background} />
        <div className={styles.overlay}></div>
        <div className={styles.content}>{children}</div>
    </div>
  );
}

export default BackgroundOverlay;
