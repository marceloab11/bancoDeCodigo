import { questions } from "@/data/questions";
import { Question  } from "@/types/question";
import { useState } from "react";


type Props = {
    question:Question;
    count:number;
    onAnswer:(Answer:number)=> void;
}

export function QuestionItem({question, count, onAnswer}:Props) {
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

   function checkQuestion(key:number)  {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            setTimeout(()=> {
                onAnswer(key)
                setSelectedAnswer(null);
            }, 1500)
        }
   }

    return(
        <div>
            <div className="text-3xl font-bold mb-5">
                {count}. {question.question}
            </div>
            <div>
                {question.options.map((item, key) => {
                  return  <div
                    key={key}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-300 
                    
                    ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key &&"bg-green-100 border-green-300"}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key &&"bg-red-100 border-red-300"}  
                    
                    `}
                    onClick={()=> checkQuestion(key)}
                    >
                        {item}
                    </div>
                })}
            </div>
        </div>
    )
}