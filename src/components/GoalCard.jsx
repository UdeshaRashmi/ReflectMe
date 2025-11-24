import React from 'react';
import { Link } from 'react-router-dom';
import calculateProgress from '../utils/calculateProgress';

const GoalCard = ({ goal, onEdit, onDelete }) => {
  const progress = calculateProgress(goal.current, goal.target);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{goal.title}</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{goal.description}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(goal)}
              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(goal.id)}
              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <div>
            <p className="text-gray-500 dark:text-gray-400">Current</p>
            <p className="font-medium">{goal.current}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Target</p>
            <p className="font-medium">{goal.target}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Deadline</p>
            <p className="font-medium">{new Date(goal.deadline).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to={`/goals/${goal.id}`}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;