import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';

import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Heading size="lg">Ignit Lab</Heading>

        <Text size="lg" className=" text-gray-400 mt-1">
          Login to use!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold"> E-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Type your email address" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold"> Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="Type your password" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text className="font-semibold">Remind me for 30 days</Text>
        </label>

        <Button type="submit" className="mt-4">
          Sign in
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild className="text-gray-400 underline hover:text-gray-200">
          <a href="">Forgot your password?</a>
        </Text>

        <Text size="sm" asChild className="text-gray-400 underline hover:text-gray-200">
          <a href="">Don't have an account? create one now!</a>
        </Text>
      </footer>
    </div>
  );
}
