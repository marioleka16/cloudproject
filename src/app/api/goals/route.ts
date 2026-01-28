import { NextResponse } from 'next/server';
import pool from '@/lib/mysql';


let mockGoals: any[] = [
  { id: 1, name: 'Mario', goal: 'Run 10km', createdAt: new Date().toISOString() },
  { id: 2, name: 'Luigi', goal: 'Jump higher', createdAt: new Date().toISOString() },
  { id: 3, name: 'Luigi', goal: 'Jump higher', createdAt: new Date().toISOString() },
  { id: 4, name: 'Luigi', goal: 'Jump higher', createdAt: new Date().toISOString() }
];

const isDbConfigured = process.env.MYSQL_HOST && process.env.MYSQL_USER && process.env.MYSQL_DATABASE;

export async function GET() {
  if (!isDbConfigured) {
    console.warn("MySQL not configured, returning mock data");
    return NextResponse.json(mockGoals);
  }

  try {
    const [rows] = await pool.query('SELECT * FROM goals ORDER BY createdAt DESC LIMIT 20');
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: 'Failed to fetch goals' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, goal } = body;

    if (!isDbConfigured) {
      const newGoal = {
        id: Date.now(),
        name,
        email,
        goal,
        createdAt: new Date().toISOString()
      };
      mockGoals.unshift(newGoal);
      return NextResponse.json({ success: true, goal: newGoal });
    }

    const [result] = await pool.execute(
      'INSERT INTO goals (name, email, goal) VALUES (?, ?, ?)',
      [name, email, goal]
    );

    const insertId = (result as any).insertId;

    return NextResponse.json({ 
      success: true, 
      goal: { id: insertId, name, email, goal, createdAt: new Date().toISOString() } 
    });
  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: 'Failed to save goal' }, { status: 500 });
  }
}
