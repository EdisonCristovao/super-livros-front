import styled from 'styled-components';

export const BookItem = styled.div`
  display: flex;

  margin: 25px 25px;
  padding: 25px 25px;
  border-radius: 5px;
  background: white;
  color: grey;
  > div {
    width: 100%;

    .detail {
      animation: RightWards 500ms ease-out;
      animation-fill-mode: backwards;
      animation-delay: 200ms;
      margin-bottom: 10px;
      h4,
      span {
        margin: 0px;
      }
    }

    button {
      padding: 5px 20px 5px 20px;
      border-radius: 20px;
      border: 1.5px solid white;
      color: white;
      background: #f16550;
      font-size: 15px;

      :hover {
        border: 1.5px solid #f16550;
        color: #f16550;
        background: white;
      }
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    width: 100%;

    animation: RightWards 500ms ease-out;
    animation-fill-mode: backwards;
    animation-delay: 200ms;

    h1 {
      font-weight: bold;
      margin-bottom: 0px;
    }
  }
  img {
    height: 600px;
    margin-right: 50px;
    border-radius: 5px;

    animation: RightWards 500ms ease-out;
    animation-fill-mode: backwards;
  }
  h2 {
    animation: RightWards 500ms ease-out;
    animation-fill-mode: backwards;
    animation-delay: 200ms;
    margin: 0px;
    margin-bottom: 20px;
  }

  @keyframes RightWards {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
