import './BackgroundOverlay.css';

interface BackgroundOverlayProps {
    src: any;
    alt: string;
    children: any;
}

function BackgroundOverlay(props: BackgroundOverlayProps) {
    const { src, alt, children } = props;

    return (
        <div className="backgroundOverlay">
            <img src={src} alt={alt} className="background" />
            <div className="overlay"></div>
            <div className="content">{children}</div>
        </div>
    );
}

export default BackgroundOverlay;
