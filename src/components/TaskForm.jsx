import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function TaskForm() {
    return (
        <div className="flex flex-grow gap-2 m-4">
            <Button className="font-extrabold text-lg">
                +
            </Button>
            <Input type="text" placeholder="Task Description" />
        </div>
    )
}

export default TaskForm;