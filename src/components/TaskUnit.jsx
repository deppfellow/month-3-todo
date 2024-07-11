import { PiTrash } from 'react-icons/pi';
import { Checkbox } from "@/components/ui/checkbox"

function TaskUnit() {
    return (
        <li className="my-1 flex items-center gap-2">
            {/* <input type="checkbox" name="task_checkbox" id="task-checkbox" />
            <label>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                hic? Hic sequi, ea eaque ducimus optio laudantium soluta cum
                minus omnis neque et fugit ut, ipsam quas sapiente sint
                provident?
            </label>
            <button>
                <PiTrash style={{ color: 'red' }} size={24} />
            </button> */}
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </li>
    );
}

export default TaskUnit;