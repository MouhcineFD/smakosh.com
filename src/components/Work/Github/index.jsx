import React, { Component } from 'react'

import GithubIcon from '../../../../static/creative/github-white.svg'
import Unnamed from '../../../../static/github/unnamed.svg'
import Perceptron from '../../../../static/github/perceptron.svg'
import Todo from '../../../../static/github/todo.svg'

import { More } from '../../common'
import Repository from './Repository'

export default class Github extends Component {

    state = {
        repos: [
            {
                id: 0,
                title: 'Unnamed',
                image: `${Unnamed}`,
                link: 'https://github.com/smakosh/unnamed-css-framework'
            },
            {
                id: 1,
                title: 'Perceptron',
                image: `${Perceptron}`,
                link: 'https://github.com/smakosh/Perceptron-neural-net-from-scratch'
            },
            {
                id: 2,
                title: 'Todo Apps',
                image: `${Todo}`,
                link: 'https://github.com/smakosh/react-todolist'
            }
        ]
    }

    render() {
        return (
            <div
                style={{
                    background: '#fff',
                    marginBottom: '2.5rem'
                }}
            >   
                <h3>Open sourced on Github</h3>
                <div className="work">
                    {this.state.repos.map(repo => (
                        <Repository
                            key={repo.id}
                            title={repo.title}
                            image={repo.image}
                            link={repo.link}
                        />
                    ))}
                    <More link="https://github.com/smakosh" color="#000" icon={GithubIcon} />
                </div>
            </div>
        )
    }
}