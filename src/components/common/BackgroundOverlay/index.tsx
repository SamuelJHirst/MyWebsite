import './BackgroundOverlay.css';

interface BackgroundOverlayProps {
    children: React.ReactNode;
    src: string;
}

function BackgroundOverlay(props: BackgroundOverlayProps) {
    const {
        children,
        src,
    } = props;

    return (
        <div
            className="backgroundOverlay"
        >
            <img
                alt=""
                className="background"
                src={src}
            />
            <div
                className="overlay"
            />
            <div
                className="content"
            >
                {children}
            </div>
        </div>
    );
}

export default BackgroundOverlay;
