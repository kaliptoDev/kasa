import './Tag.css'

const Tag = ({ text }) => {
    return (
        <div className='tag'>
            <span className="tag-span">{text}</span>
        </div>
    );
}

export default Tag