import Container from "@/components/UI/Container";

import Chat from "@/components/Chat";
import Dialogues from "@/components/Dialogues";

export default function () {
    return (
        <Container minH>
            <div className='w-[1200px] h-[560px] bg-(-bg) rounded-2xl p-[50px]
                grid grid-cols-[300px_auto] gap-x-[50px]'>
                <Dialogues />
                <Chat />
            </div>
        </Container>
    )
}
