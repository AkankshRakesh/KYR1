import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Answers {
  [key: string]: string;
}

interface Option {
  value: string;
  index: number;
  answer: string;
}

const Form: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [options, setOptions] = useState<Option[]>([]);
  const [showAllOptions, setShowAllOptions] = useState(false);

  useEffect(() => {
    if (step === 2 && answers.question1) {
      fetchCase3Options(answers.question1);
    }
  }, [step, answers]);

  const fetchCase3Options = async (article: string) => {
    if (!article) return;

    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND}/api/options/data53/${article}`);
      setOptions(response.data.options || []);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleAnswer = (question: string, answer: string) => {
    setAnswers({ ...answers, [question]: answer });
    setStep(step + 1);
  };

  const handlePrevStep = () => setStep(step - 1);

  const toggleShowAllOptions = () => setShowAllOptions(!showAllOptions);

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (<><label className="block text-2xl font-semibold text-gray-900 mb-6">The Union</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-60 overflow-y-auto border-2 border-pink-200 p-4 mb-4">
              
              <button
                onClick={() => handleAnswer('question1', '52')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                The President of India (Article 52)
              </button>



              <button
                onClick={() => handleAnswer('question1', '53')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Executive Power of the Union (Article 53)
              </button>

              <button
                onClick={() => handleAnswer('question1', '54')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Election of President (Article 54)
                 
              </button>
              <button
                onClick={() => handleAnswer('question1', '55')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Manner of election of President (Article 55
              </button>
              <button
                onClick={() => handleAnswer('question1', '56')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Term of office of President (Article 56)
                 
                </button>
              <button
                onClick={() => handleAnswer('question1', '57')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Eligibility for re-election (Article 57)
                </button>

                <button
                onClick={() => handleAnswer('question1', '58')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
               Qualifications for election as President (Article 58)
               </button>
              <button
                onClick={() => handleAnswer('question1', '59')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Conditions of President’s office (Article 59)
              </button>

              <button
                onClick={() => handleAnswer('question1', '60')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Oath or affirmation by the President (Article 60)
              </button>
              <button
                onClick={() => handleAnswer('question1', '61')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Procedure for impeachment of the President (Article 61)
              </button>

              <button
                onClick={() => handleAnswer('question1', '62')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Time of holding election to fill vacancy in the office of President and the term of office of person elected to fill casual vacancy (Article 62)
              </button>
              <button
                onClick={() => handleAnswer('question1', '63')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                The Vice-President of India (Article 63)
              </button>
              <button
                onClick={() => handleAnswer('question1', '64')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                The Vice-President to be ex officio Chairman of the Council of States (Article 64)
              </button>
              <button
                onClick={() => handleAnswer('question1', '65')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                The Vice-President to act as President or to discharge his functions during casual vacancies in the office, or during the absence, of President (Article 65)
              </button>
              <button
                onClick={() => handleAnswer('question1', '66')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Election of Vice-President (Article 66)
              </button>
              <button
                onClick={() => handleAnswer('question1', '67')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Term of office of Vice-President (Article 67)
              </button>
                

              <button
                onClick={() => handleAnswer('question1', '68')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Time of holding election to fill vacancy in the office of Vice-President and the term of office of person elected to fill casual vacancy (Article 68)
              </button>

              <button
                onClick={() => handleAnswer('question1', '69')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Oath or affirmation by the Vice-President (Article 69)
              </button>
              <button
                onClick={() => handleAnswer('question1', '70')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Discharge of President’s functions in other contingencies (Article 70)
              </button>

              <button
                onClick={() => handleAnswer('question1', '71')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Matters relating to, or connected with, the election of a President or Vice-President (Article 71)
              </button>
              <button
                onClick={() => handleAnswer('question1', '72')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Power of President to grant pardons, etc., and to suspend, remit or commute sentences in certain cases (Article 72)
              </button>
              <button
                onClick={() => handleAnswer('question1', '73')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Extent of executive power of the Union (Article 73)
              </button>
              <button
                onClick={() => handleAnswer('question1', '74')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Council of Ministers to aid and advise President (Article 74)
              </button>
              <button
                onClick={() => handleAnswer('question1', '75')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Other provisions as to Ministers (Article 75)
              </button>
              <button
                onClick={() => handleAnswer('question1', '76')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Attorney-General for India (Article 76)
              </button>

              <button
                onClick={() => handleAnswer('question1', '77')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Conduct of business of the Government of India (Article 77)
              </button>
              <button
                onClick={() => handleAnswer('question1', '78')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Duties of Prime Minister as respects the furnishing of information to the President, etc. (Article 78)
              </button>
              <button
                onClick={() => handleAnswer('question1', '79')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Constitution of Parliament (Article 79)
              </button>
              <button
                onClick={() => handleAnswer('question1', '80')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Composition of the Council of States (Article 80)
              </button>
              <button
                onClick={() => handleAnswer('question1', '81')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Composition of the House of the People (Article 81)
              </button>
              <button
                onClick={() => handleAnswer('question1', '82')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Readjustment after each census (Article 82)
              </button>
              <button
                onClick={() => handleAnswer('question1', '83')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Duration of Houses of Parliament (Article 83)
              </button>
              <button
                onClick={() => handleAnswer('question1', '84')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Qualification for membership of Parliament (Article 84)
              </button>
              <button
                onClick={() => handleAnswer('question1', '85')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Sessions of Parliament, prorogation and dissolution (Article 85)
              </button>
              <button
                onClick={() => handleAnswer('question1', '86')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Right of President to address and send messages to Houses (Article 86)
              </button>
              <button
                onClick={() => handleAnswer('question1', '87')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Special address by the President (Article 87)
              </button>
              <button
                onClick={() => handleAnswer('question1', '88')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Rights of Ministers and Attorney-General as respects Houses (Article 88)
              </button>
              <button
                onClick={() => handleAnswer('question1', '89')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                The Chairman and Deputy Chairman of the Council of States (Article 89)
              </button>
              <button
                onClick={() => handleAnswer('question1', '90')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Vacation and resignation of, and removal from, the office of Deputy Chairman (Article 90)
              </button>
              <button
                onClick={() => handleAnswer('question1', '91')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Power of the Deputy Chairman or other person to perform the duties of the office of, or to act as, Chairman (Article 91)
              </button>
              <button
                onClick={() => handleAnswer('question1', '92')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                The Chairman or the Deputy Chairman not to preside while a resolution for his removal from office is under consideration (Article 92)
              </button>
              <button
                onClick={() => handleAnswer('question1', '93')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                The Speaker and Deputy Speaker of the House of the People (Article 93)
              </button>
              <button
                onClick={() => handleAnswer('question1', '94')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Vacation and resignation of, and removal from, the offices of Speaker and Deputy Speaker (Article 94)
              </button>
              <button
                onClick={() => handleAnswer('question1', '95')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Power of the Deputy Speaker or other person to perform the duties of the office of, or to act as, Speaker (Article 95)
              </button>
              <button
                onClick={() => handleAnswer('question1', '96')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                The Speaker or the Deputy Speaker not to preside while a resolution for his removal from office is under consideration (Article 96)
              </button>
              <button
                onClick={() => handleAnswer('question1', '97')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Salaries and allowances of the Chairman and Deputy Chairman and the Speaker and Deputy Speaker (Article 97)
              </button>
              <button
                onClick={() => handleAnswer('question1', '98')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Conduct of business (Article 98)
              </button>
              <button
                onClick={() => handleAnswer('question1', '99')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Vacation of seats (Article 99)
              </button>
              <button
                onClick={() => handleAnswer('question1', '100')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Oath or affirmation by members (Article 100)
              </button>
              <button
                onClick={() => handleAnswer('question1', '101')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Voting in Houses, power of Houses to act notwithstanding vacancies and quorum (Article 101)
              </button>
              <button
                onClick={() => handleAnswer('question1', '102')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Vacation of seats (Article 102)
              </button>
              <button
                onClick={() => handleAnswer('question1', '103')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Disqualifications for membership (Article 103)
              </button>
              <button
                onClick={() => handleAnswer('question1', '104')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Decision on questions as to disqualifications of members (Article 104)
              </button>
              <button
                onClick={() => handleAnswer('question1', '105')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Penalties for sitting and voting before making oath or affirmation under article 99 or when not qualified or when disqualified (Article 105)
              </button>
              <button
                onClick={() => handleAnswer('question1', '106')}
                className="px-4 py-2 border border-black text-[#d42755]  font-semibold rounded-lg shadow-md hover:bg-[#F7D8E0] transition duration-300"
              >
                Powers, privileges, etc., of the Houses of Parliament and of the members and committees thereof (Article 106)
              </button>
              <button
                onClick={() => handleAnswer('question1', '107')}
                className="px-4 py-2 bg-[#d42755] text-white font-semibold rounded-lg shadow-md hover:bg-[#b51d48] transition duration-300"
              >
                Salaries and allowances of members (Article 107)
              </button>
            
            </div>   
        
        </>);
      case 2:
        return (
          <>
            <label className="block text-2xl font-semibold text-gray-900 mb-6">
              Here's what you need to know about Article {answers.question1}:
            </label>
            <ul className="list-disc pl-6">
              {options.slice(0, showAllOptions ? options.length : 6).map((option) => (
                <li key={option.index} className="text-lg text-gray-800 mb-2">
                  {option.value}
                </li>
              ))}
            </ul>
            {options.length > 6 && (
              <button
                onClick={toggleShowAllOptions}
                className="text-blue-500 hover:underline mt-4"
              >
                {showAllOptions ? 'Show Less' : 'Learn More'}
              </button>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-md rounded-lg p-8">
        {renderQuestion()}
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              onClick={handlePrevStep}
              className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400 " id='prevbutton'
            >
              Previous
            </button>
          )}
          {step < 3 && answers[`question${step}`] && (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
