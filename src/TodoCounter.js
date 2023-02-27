
export default function TodoCounter(props) {
    const count = (props.todos.filter(item => !item.isDone)).length;
    
    return (
        <div className="uppercase text-left pl-3 pb-2 text-sm text-[#969CC1]">
            {count} tasks to do
        </div>
    )
}
