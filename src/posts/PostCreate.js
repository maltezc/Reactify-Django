import React, {Component} from 'react'

class PostCreate extends Component {
    constructor(props){
    // {/^part2 of taking over action for submitting a form*/}
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        state = {
            draft: false,
            title: null,
            content: null,
            publish: null,
            errors: {}
            }

    }




    handleSubmit(event){
        event.preventDefault()
        // ^prevents typical action by form
        // console.log(this.state)
        let data = this.state
        if (data['draft'] === 'on'){
            data['draft'] = true
        } else {
            data['draft'] = false
        }
        console.log(data)
    }

    handleInputChange(event){
        event.preventDefault()
        console.log(event.target.name, event.target.value)
        let key = event.target.name
        let value = event.target.value
        if (key === 'title'){
            if (value.length > 120) {
                alert("This title is too long")
            }
        }
        this.setState({
            [key]: value
        })
    }

    componentDidMount() {
        this.setState({
            draft: false,
            title: null,
            content: null,
            publish: null,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/*part1 of taking over action for submitting a form*!*/}
                <div className='form-group'>
                    <label for='title'>Post title</label>
                    <input type='text' name='title' className='form-control' placeholder='Blog post title' onChange={this.handleInputChange} required='required'/>
                    {/*ending slash above is KEY!!!!*/}
                </div>
                <div className='form-group'>
                    <label for='content'>Content</label>
                    <textarea id='content' name='content' className='form-control' placeholder='Post content' onChange={this.handleInputChange} required='required'/>
                    {/*ending slash above is KEY!!!!*/}
                </div>
                <div className='form-group'>
                    <label for='draft'>
                    <input type='checkbox' name='draft' className='mr-2' onChange={this.handleInputChange}/>
                    {/*ending slash above is KEY!!!!*/}
                     Draft</label>
                </div>
                <div className='form-group'>
                    <label for='publish'>Publish Date</label>
                    <input type='date' name='publish' className='form-control' onChange={this.handleInputChange} required='required'/>
                    {/*ending slash above is KEY!!!!*/}
                </div>
                <button className='btn btn-primary'>Save</button>
            </form>
        )
    }
}


export default PostCreate