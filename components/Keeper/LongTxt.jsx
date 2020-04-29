const LongTxt = ({ text, longTxt, onToggleLongTxt }) => {
    if (longTxt && text.length > 27) {
        return (
            <p className="pointer" onClick={onToggleLongTxt}>
                {text}{' '}
                
            </p>
        );
    } else {
        return (
            <p className="pointer" onClick={onToggleLongTxt}>
                {text.slice(0,27)}{' '}
                
            </p>
        )
    }
};

export default LongTxt;