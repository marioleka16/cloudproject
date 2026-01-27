import { NextResponse } from 'next/server';
// import { dynamo } from '@/lib/dynamodb';

// Mock Data In-Memory (will reset on server restart)
let mockGoals: any[] = [
  { id: '1', name: 'Mario', goal: 'Run 10km', createdAt: new Date().toISOString() },
  { id: '2', name: 'Luigi', goal: 'Jump higher', createdAt: new Date().toISOString() }
];

export async function GET() {
  // TODO: Use DynamoDB
  // const { Items } = await dynamo.send(new ScanCommand({ TableName: 'IronPulseGoals' }));
  return NextResponse.json(mockGoals);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newGoal = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email, // Don't return email in GET for privacy if real
      goal: body.goal,
      createdAt: new Date().toISOString()
    };
    
    // TODO: Use DynamoDB
    // await dynamo.send(new PutItemCommand({ ... }));
    
    mockGoals.unshift(newGoal); // Add to beginning
    if (mockGoals.length > 20) mockGoals.pop(); // Limit size
    
    return NextResponse.json({ success: true, goal: newGoal });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save goal' }, { status: 500 });
  }
}
