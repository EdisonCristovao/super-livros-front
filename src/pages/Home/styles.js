import styled from 'styled-components';

export const Header = styled.div`
  margin: 20px 50px 5px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: DownWards 500ms ease-out;
  animation-fill-mode: backwards;

  @keyframes DownWards {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    padding: 2px 10px;
    border-radius: 5px;
    background: white;
    color: #f16550;
    margin-bottom: 0;
  }
  form {
    width: 100%;
    margin: 0 10px 0 10px;
  }
`;

export const OutlinedButton = styled.button`
  padding: 5px 20px 5px 20px;
  border-radius: 20px;
  border: 1.5px solid white;
  color: white;
  background: #f16550;

  :hover {
    border: 1.5px solid #f16550;
    color: #f16550;
    background: white;
  }
`;

export const DateFields = styled.div`
  margin: 5px 50px 5px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;

  p {
    margin: 0 0 0 0;
  }

  form {
    width: 80%;
    display: flex;
    align-items: center;
    animation: RightWards 500ms ease-out;
    animation-fill-mode: backwards;
    animation-delay: 350ms;

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
    div {
      margin: 0 0 0 0;
    }

    span {
      margin: 0 10px 0 15px;
    }
    input {
      width: 70px;
      margin: 0 10px 0 10px;
    }
  }

  .toLeft {
    animation: leftWards 500ms ease-out;
    animation-fill-mode: backwards;
    animation-delay: 350ms;

    @keyframes leftWards {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const TableSection = styled.div`
  margin: 5px 50px 5px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: UpWards 500ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: 800ms;

  @keyframes UpWards {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
