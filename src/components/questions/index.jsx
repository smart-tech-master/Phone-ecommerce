//@flow

import React from 'react'
import { ANSWER } from 'common/images'
import { ASK } from 'common/images'
import { EMOJI } from 'common/images'
import { AVATAR } from 'common/images'
import { INVITE_FRIENDS } from 'common/images'
import {
  questions_container,
  questions_label,
  new_question,
  avatar_style,
  question_textarea,
  answer_textarea,
  ask_button,
  background,
  text,
  add_answer_button,
  questions_list,
  question_item,
  answers_label,
  autor_name,
  question_date,
  question_text,
  answer_item,
  answers,
  answer_text,
  no_answers_text,
  invite_friends_buttom,
  new_question_avatar,

} from './questions.module.scss'

type ProductVieosState = {
  newQuestion: string,
  newAnswer: string,
  addAnswer: boolean,
  answerIndex: number,
  questions: Array<Object>

}
class ProductVieos extends React.Component<{}, ProductVieosState> {

  state = {
    newQuestion: "",
    newAnswer: "",
    addAnswer: false,
    answerIndex: 0,
    questions: [
      {
        question: {
          autor: {
            name: 'Eugene Diaz',
            avatar: ''
          },
          date: '7 hours ago',
          questionText: 'Why is iPhone X discontinued?',
          myQuestion: false

        },
        answers: [
          {
            autor: {
              name: 'Kevin Barnett',
              avatar: ''
            },
            date: '7 hours ago',
            answerText: 'Less than one year since it was released, Apple has discontinued the iPhone X with the introduction of its three new iPhones today.'
          },
          {
            autor: {
              name: 'Nicolas Smith',
              avatar: ''
            },
            date: '7 hours ago',
            answerText: 'The iPhone XR was up for preorder Oct. 19 and hit stores Oct. 26. If Apple follows a similar pattern for 2019, it would announce the 2019 iPhones on Sept. 10'
          },
          {
            autor: {
              name: 'Matthew Sullivan',
              avatar: ''
            },
            date: '7 hours ago',
            answerText: 'The handsets would likely go on preorder Sept. 13 and go on sale Sept. 20.'
          }
        ]
      },
      {
        question: {
          autor: {
            name: 'Mary Ann Cook',
            avatar: ''
          },
          date: '7 hours ago',
          questionText: 'What is the difference between iPhone X and XR and XS?',
          myQuestion: false
        },
        answers: []
      }
    ]
  }

  addQuestion = () => {
    const questions = this.state.questions;
    this.state.newQuestion && questions.push(
      {
        question: {
          autor: {
            name: 'test user',
            avatar: ''
          },
          date: 'now',
          questionText: this.state.newQuestion
        },
        answers: [],
        myQuestion: true

      });
    this.setState({ questions: questions });
    this.setState({ newQuestion: "" });
  }

  addAnswer = (qIndex: number) => {
    const index = this.state.questions.length - qIndex - 1;
    if (!this.state.addAnswer || this.state.answerIndex !== qIndex) {
      this.setState({ addAnswer: true });
      this.setState({ answerIndex: qIndex });
      this.setState({ newAnswer: "" });
    }
    else {
      this.setState({ addAnswer: false });
      const questions = this.state.questions;
      questions[index].answers.push({
        autor: {
          name: 'test user',
          avatar: ''
        },
        date: 'now',
        answerText: this.state.newAnswer
      });

      this.setState({ questions: questions });
      this.setState({ newAnswer: "" });
    }

  }

  handleChange = (event: Object) => {
    this.setState({ newQuestion: event.target.value });
  }

  answerChange = (event: Object) => {
    this.setState({ newAnswer: event.target.value });
  }

  render() {
    let questions = [...this.state.questions].reverse();
    const addAnswer = this.state.addAnswer;
    const answerIndex = this.state.answerIndex;
    return (
      <div className={questions_container}>
        <h1 className={questions_label}>QA</h1>
        <div className={new_question}>
          <img className={new_question_avatar} src={AVATAR} alt="avatar" />

          <div className={question_textarea}>
            <textarea
              value={this.state.newQuestion}
              onChange={this.handleChange}
              placeholder="Do you have any questions about this product? Ask here." />
            <img src={EMOJI} alt="emoji" />
          </div>
        </div>

        <div className={ask_button} onClick={this.addQuestion}>
          <div className={background}></div>
          <div className={text}>
            <img src={ASK} alt="ASK" />
            Ask Question
          </div>
        </div>

        <div className={questions_list}>
          {questions.map((item, qIndex) => {
            return (
              <div className={question_item} key={qIndex}>
                <img className={avatar_style} src={AVATAR} alt="avatar" />
                <div className={autor_name}>
                  {item.question.autor.name}
                </div>
                <div className={question_date}>
                  {item.question.date}
                </div>
                <div className={question_text}>{item.question.questionText} </div>
                {item.answers && item.answers.length > 0 && (
                  <div className={answers}>
                    {item.answers.length === 1 && (
                      <div className={answers_label}>{item.answers.length} answer</div>
                    )}
                    {item.answers.length > 1 && (
                      <div className={answers_label}>{item.answers.length} answers</div>
                    )}
                    {item.answers.map((answer, ansIndex) => {
                      return (
                        <div className={answer_item} key={ansIndex}>
                          <img className={avatar_style} src={AVATAR} alt="avatar" />
                          <div className={autor_name}>
                            {answer.autor.name}
                          </div>
                          <div className={question_date}>
                            {answer.date}
                          </div>
                          <div className={answer_text}>{answer.answerText} </div>
                        </div>
                      )
                    })}
                  </div>
                )}
                {item.myQuestion && item.answers && item.answers.length === 0 && (
                  <div>
                    <div className={no_answers_text}>No answers for your question yet. Invite your friends to join the conversation.</div>
                    <div className={invite_friends_buttom}>
                      <img src={INVITE_FRIENDS} alt="INVITE_FRIENDS" />
                      Invite Friends
                      </div>
                  </div>
                )}
                {!item.myQuestion && item.answers && item.answers.length === 0 && (
                  <div>
                    <div className={no_answers_text}>No answers for your question yet. Give the first answer to help the community.</div>
                  </div>
                )}
                {addAnswer && answerIndex === qIndex && (
                  <div className={answer_textarea}>
                    <textarea
                      value={this.state.newAnswer}
                      onChange={this.answerChange}
                      placeholder="Answer here." />
                    <img src={EMOJI} alt="emoji" />
                  </div>
                )
                }
                {(!item.myQuestion
                  || (item.myQuestion && item.answers && item.answers.length > 0))
                  && (
                    <div className={add_answer_button} onClick={(e) => this.addAnswer(qIndex)}>
                      <img src={ANSWER} alt="ANSWER" />
                      Add answer
                </div>
                  )}

              </div>
            )
          })}
        </div>

      </div >
    )
  }
}

export default ProductVieos;
