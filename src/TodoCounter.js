
export default function TodoCounter(props) {
    const count = (props.todos.filter(item => !item.isDone)).length;
    
    return (
        <div className="uppercase text-left pl-3 pb-3 text-xs font-semibold text-[#969CC1]">
            {count} {count === 1 ? 'task' : 'tasks'} to do
        </div>
    )
}
