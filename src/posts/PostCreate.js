import React, {Component} from 'react'

class PostCreate extends Component {
    render() {
        return (
            <form>
                <div className='form-group'>
                    <label for='title'>Post title</label>
                    <input type='text' name='title' className='form-control' placeholder='Blog post title' />
                    {/*ending slash above is KEY!!!!*/}
                </div>
                <div className='form-group'>
                    <label for='content'>Content</label>
                    <textarea id='content' name='content' className='form-control' placeholder='Post content'/>
                    {/*ending slash above is KEY!!!!*/}
                </div>
                <div className='form-group'>
                    <label for='draft'>
                    <input type='checkbox' name='draft' className='mr-2' />
                    {/*ending slash above is KEY!!!!*/}
                     Draft</label>
                </div>
                <div className='form-group'>
                    <label for='publish'>Publish Date</label>
                    <input type='date' name='publish' className='form-control' />
                    {/*ending slash above is KEY!!!!*/}
                </div>
                <button className='btn btn-primary'>Save</button>
            </form>
        )
    }
}


export default PostCreate