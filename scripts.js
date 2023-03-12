const reply = document.getElementById("reply");
const MN_COMMENT = document.querySelector('#comments');
const MY_COMMENT = document.getElementById('my-comments')
const VIEW_COMMENT = document.getElementById('view-comments')
const ID_COMMENT = document.getElementById('commentId');
const wrap = document.getElementById('wrapper');
let userReply = document.getElementById('userreply').innerHTML;
const username = prompt('Enter username', 'default name')
    reply.addEventListener('click', () =>{
    const comment = document.createElement('div');
    comment.classList.add('content__main');
    const inner = document.createElement('div');
    inner.classList.add('content__inner4');

    const form = document.createElement('form');
    form.classList.add('content__flex-form');
    inner.append(form);

    const img = document.createElement('img');
    img.classList.add('content__img3');
    img.src='images/avatars/image-maxblagun.png';
    form.append(img);

    const textarea = document.createElement('textarea');
    textarea.classList.add('content__input');
    textarea.type="text";
    textarea.placeholder="Add a reply";
    textarea.cols='20';
    textarea.rows='4';
    form.append(textarea);

    const button = document.createElement('button');
    button.classList.add('btn-submit');
    button.type='submit';
    button.textContent='Reply'
   

    button.addEventListener('click', (e) =>{
        e.preventDefault();
            
        if(textarea.value === '' || textarea.value === null){
                alert('Enter a Reply')
        }
        else {
         comment.remove();
        const NEW_COMMENT = document.createElement('div');
        NEW_COMMENT.classList.add('content__main');
        const flex = document.createElement('div');
        flex.classList.add('content__inner');
        const contentBox = document.createElement('div');
        contentBox.classList.add('content__flex');
        flex.append(contentBox)

        const contentBox2 = document.createElement('div');
        contentBox2.classList.add('content__flex2');
        contentBox.append(contentBox2);

        const contentImg = document.createElement('img');
        contentImg.classList.add('content__img2');
        contentBox2.append(contentImg);

        const heading = document.createElement('h4');
        heading.classList.add('h4');
       
        heading.textContent= username //USER
        contentBox2.append(heading)

        const period = document.createElement('span');
        period.classList.add('content__period');
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let pm = "pm";
        let am = "am";
        let p;
        (h > 12) ? p = pm : p = am;
         (m < 10) ? m = `0${m}` : m;
        period.textContent=`${h}:${m} ${p}`;
        contentBox2.append(period)

        // const icon = document.createElement('span');
        // icon.classList.add('content__icon');
        // icon.textContent='Reply';
        // const icon2 = document.createElement('img');
        // icon2.classList.add('con__icon');
        // icon2.style.marginRight = '5px'
        // icon2.src='images/icon-reply.svg';
        // icon.prepend(icon2);
    
        // contentBox.append(icon);
        const replies = document.createElement('p');
        replies.classList.add('p');
       const replyingTo = document.createElement('span');
        replyingTo.style.color = 'hsl(238, 40%, 52%)'
        replyingTo.textContent = `@${userReply} `
        replies.textContent= `${textarea.value}`;
        replies.prepend(replyingTo)
        flex.append(replies)
        contentBox2.append(period)
        
        const votes = document.createElement('div');
        votes.classList.add('content__votes')
        const voteInner = document.createElement('div');
        voteInner.classList.add('content__vote-box');
        votes.append(voteInner);

        const minus = document.createElement('span');
        minus.classList.add('content__minus');
        minus.textContent = '-'
        voteInner.append(minus)

        const num = document.createElement('span');
        num.classList.add('content__number');
        num.textContent = '10'
        voteInner.append(num);

        const plus = document.createElement('span');
        plus.classList.add('content__plus');
        plus.textContent = '+'
        voteInner.append(plus)

        
        flex.append(votes)
        NEW_COMMENT.append(flex);
        MN_COMMENT.append(NEW_COMMENT)
        }
    
      
    })
    form.append(button);
    comment.append(inner)
    MN_COMMENT.append(comment)

})
MY_COMMENT.addEventListener('click', () => {
    console.log('helol');
   if(ID_COMMENT.value === '' || ID_COMMENT.value === null){
       alert('Enter a Comment')
   }
   else {

    const myComment = document.createElement('div');
    myComment.classList.add('content__main');
    const MC_INNER = document.createElement('div');
    MC_INNER.classList.add('content__inner2');

    const contentFlex = document.createElement('div');
    contentFlex.classList.add('content__flex');
    const cFlex2 = document.createElement('div');
    cFlex2.classList.add('content__flex2');
    contentFlex.append(cFlex2)

    const conImg = document.createElement('img');
    conImg.classList.add('content__img2');
    const heading = document.createElement('h4');
    heading.textContent= username;
    heading.classList.add('h4');
    cFlex2.append(conImg)
    cFlex2.append(heading)

    const period2 = document.createElement('span');
    period2.classList.add('content__period');
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let pm = "pm";
    let am = "am";
    let p;
    (h > 12) ? p = pm : p = am;
    (m < 10) ? m = `0${m}` : m;
    period2.textContent=`${h}:${m} ${p}`;
    cFlex2.append(period2);


    const actions = document.createElement('div');
    actions.classList.add('content__actions');
    const icon1 = document.createElement('span');
    icon1.classList.add('content__icon1');
    icon1.textContent = 'Delete';
    icon1.style.color = 'hsl(358, 79%, 66%)'
    icon1.style.cursor = 'pointer';
    const del = document.createElement('img');
    del.classList.add('con-icon2');
    del.src="images/icon-delete.svg";
    del.alt='icon';
    del.style.cursor = 'pointer';
    icon1.append(del);
    actions.append(icon1);

    const icon2 = document.createElement('span');
    icon2.classList.add('content__icon2');
    icon2.textContent = 'Edit';
    icon2.style.cursor = 'pointer';
    const edit = document.createElement('img');
    edit.classList.add('con-icon2');
    edit.src="images/icon-edit.svg";
    edit.alt='icon';
    edit.style.cursor = 'pointer';
    icon2.append(edit);
    
    //Edit section
    const editContent = () => {

        commentInput.focus();
        commentInput.style.border = 'none';
        commentInput.removeAttribute('readonly');
        updateBtn.style.backgroundColor = 'hsl(238, 40%, 52%)';
        return

    }
    edit.addEventListener('click', editContent)
    icon2.addEventListener('click', editContent);
     
    actions.append(icon2);
    contentFlex.append(actions);
    //delete section
   
    const display = () =>{

        const popup = document.createElement('div');
        popup.classList.add('content__popup');
        const popupInner = document.createElement('div');
        popupInner.classList.add('content__popup-inner');

        const popupHeading = document.createElement('div');
        popupHeading.classList.add('content__popup-heading');
        popupHeading.textContent = 'Delete comment';
        popupInner.append(popupHeading);

        const popupMsg = document.createElement('div');
        popupMsg.classList.add('content__msg');
        popupMsg.textContent = 'Are you sure you want to delete this comment? This will remove the comment and cant be undone ';
        popupInner.append(popupMsg);

        const popupBtn = document.createElement('div');
        popupBtn.classList.add('content__popup-btn');
        const popupCancel = document.createElement('button');
        popupCancel.classList.add('content__edit');
        popupCancel.textContent= 'No, cancel';
        popupBtn.append(popupCancel);
        popupCancel.addEventListener('click', () =>{
            popup.remove();
        })

        const popupDelete= document.createElement('button');
        popupDelete.classList.add('content__delete');
        popupDelete.textContent= 'Yes, Delete';
        popupBtn.append(popupDelete);
        popupDelete.addEventListener('click', () =>{
            myComment.remove();
            popup.remove();
        })

        popupInner.append(popupBtn)
        popup.append(popupInner);
        wrap.append(popup)
    }
    icon1.addEventListener('click', display);
    // del.addEventListener('click', display);
    const commentWrap = document.createElement('div');
    
    const commentInput = document.createElement('textarea');
    commentInput.classList.add('comment-input');
    commentInput.type = 'text';
   
    commentInput.style.minHeight= '20px'
    commentInput.value = ID_COMMENT.value;
    ID_COMMENT.value = '';
    commentInput.setAttribute('readonly', 'readonly');
    commentWrap.append(commentInput);
    
    const contentUpdate = document.createElement('div');
    contentUpdate.classList.add('content__update');
    const updateBtn = document.createElement('button');
    updateBtn.classList.add('content__update-btn');
    updateBtn.textContent = 'UPDATE';
    updateBtn.style.backgroundColor = 'hsla(238, 41%, 53%, 0.767)'
    contentUpdate.append(updateBtn);
  
    updateBtn.addEventListener('click', (e)=>{
        commentInput.setAttribute('readonly', 'readonly');
        updateBtn.style.backgroundColor = 'hsla(238, 41%, 53%, 0.767)';
       

    })
    MC_INNER.append(contentFlex);
    MC_INNER.append(commentWrap);
    MC_INNER.append(contentUpdate);
    myComment.append(MC_INNER);
    VIEW_COMMENT.append(myComment);
}
})
