import { styled } from "styled-components";

export const Container = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: max-content 1fr max-content;
	width: 100%;
	height: 100vh;
	overflow: hidden;

	> main {
		overflow: ${({ $statusMenu }) => $statusMenu == "open" ? "hidden" : "auto"};

		h2 {
			color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT300};
			font-size: 3.2rem;
			line-height: 140%;
			margin: 5.6rem 2rem 1.7rem;
		}
	}
`;

export const OrdersContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
	padding: 0 2rem 3rem;

	> .orderCard {
		color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT400};
		font-size: 1.2rem;
		line-height: 160%;
		padding: 2rem;
		border: 2px solid ${({ theme }) => theme.COLORS.DARK.DARK1000};
		border-radius: .8rem;

		div {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem;
		}

		> p {
			margin-top: 1.6rem;
		}
	}
`;

export const StatusOrder = styled.div`
	span {
		display: flex;
		align-items: center;
		gap: .8rem;
		&::before {
			content: "";
			width: .8rem;
			height: .8rem;
			background: ${({ theme, $orderstatus }) => $orderstatus == "Pendente" ? theme.COLORS.TINTS.TOMATO300 : $orderstatus == "Preparando" ? theme.COLORS.TINTS.CARROT100 : theme.COLORS.TINTS.MINT100};
			border-radius: 50%;
		}
	}
`;