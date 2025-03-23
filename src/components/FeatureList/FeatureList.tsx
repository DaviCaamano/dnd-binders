
interface FeatureListProps {
    player: string
}
export const FeatureList = ({ player }: FeatureListProps) => {
    console.log(player);
    return (
        <div className="feature-list">
        <h2>Features</h2>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
        </ul>
        </div>
    );
}
