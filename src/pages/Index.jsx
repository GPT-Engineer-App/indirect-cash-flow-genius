import { Container, Text, VStack, HStack, Input, Box, Divider, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [netIncome, setNetIncome] = useState(0);
  const [depreciation, setDepreciation] = useState(0);
  const [amortization, setAmortization] = useState(0);
  const [currentAssets, setCurrentAssets] = useState(0);
  const [currentLiabilities, setCurrentLiabilities] = useState(0);
  const [debt, setDebt] = useState(0);
  const [equity, setEquity] = useState(0);
  const [capitalExpenditures, setCapitalExpenditures] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [propertySales, setPropertySales] = useState(0);
  const [netChangeDebt, setNetChangeDebt] = useState(0);
  const [netChangeEquity, setNetChangeEquity] = useState(0);
  const [dividendsPaid, setDividendsPaid] = useState(0);

  const cashFlowFromOperations = parseFloat(netIncome) + parseFloat(depreciation) + parseFloat(amortization);
  const cashFlowFromInvesting = parseFloat(capitalExpenditures) + parseFloat(investments) + parseFloat(propertySales);
  const cashFlowFromFinancing = parseFloat(netChangeDebt) + parseFloat(netChangeEquity) - parseFloat(dividendsPaid);
  const totalCashFlow = cashFlowFromOperations + cashFlowFromInvesting + cashFlowFromFinancing;

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Indirect Cash Flow Statement
        </Heading>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Income Statement
          </Heading>
          <HStack spacing={4}>
            <Text width="150px">Net Income:</Text>
            <Input type="number" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Depreciation:</Text>
            <Input type="number" value={depreciation} onChange={(e) => setDepreciation(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Amortization:</Text>
            <Input type="number" value={amortization} onChange={(e) => setAmortization(e.target.value)} />
          </HStack>
          <Divider my={4} />
          <HStack spacing={4}>
            <Text width="150px">Total:</Text>
            <Text>{cashFlowFromOperations.toFixed(2)}</Text>
          </HStack>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Balance Sheet
          </Heading>
          <HStack spacing={4}>
            <Text width="150px">Current Assets:</Text>
            <Input type="number" value={currentAssets} onChange={(e) => setCurrentAssets(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Current Liabilities:</Text>
            <Input type="number" value={currentLiabilities} onChange={(e) => setCurrentLiabilities(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Debt:</Text>
            <Input type="number" value={debt} onChange={(e) => setDebt(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Equity:</Text>
            <Input type="number" value={equity} onChange={(e) => setEquity(e.target.value)} />
          </HStack>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Cash Flow from Investing
          </Heading>
          <HStack spacing={4}>
            <Text width="150px">Capital Expenditures:</Text>
            <Input type="number" value={capitalExpenditures} onChange={(e) => setCapitalExpenditures(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Investments:</Text>
            <Input type="number" value={investments} onChange={(e) => setInvestments(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Property Sales:</Text>
            <Input type="number" value={propertySales} onChange={(e) => setPropertySales(e.target.value)} />
          </HStack>
          <Divider my={4} />
          <HStack spacing={4}>
            <Text width="150px">Total:</Text>
            <Text>{cashFlowFromInvesting.toFixed(2)}</Text>
          </HStack>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Cash Flow from Financing
          </Heading>
          <HStack spacing={4}>
            <Text width="150px">Net Change in Debt:</Text>
            <Input type="number" value={netChangeDebt} onChange={(e) => setNetChangeDebt(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Net Change in Equity:</Text>
            <Input type="number" value={netChangeEquity} onChange={(e) => setNetChangeEquity(e.target.value)} />
          </HStack>
          <HStack spacing={4} mt={2}>
            <Text width="150px">Dividends Paid:</Text>
            <Input type="number" value={dividendsPaid} onChange={(e) => setDividendsPaid(e.target.value)} />
          </HStack>
          <Divider my={4} />
          <HStack spacing={4}>
            <Text width="150px">Total:</Text>
            <Text>{cashFlowFromFinancing.toFixed(2)}</Text>
          </HStack>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Total Cash Flow
          </Heading>
          <HStack spacing={4}>
            <Text width="150px">Total Cash Flow:</Text>
            <Text>{totalCashFlow.toFixed(2)}</Text>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
