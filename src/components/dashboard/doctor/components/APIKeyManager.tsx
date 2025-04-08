import React, { useState } from 'react';
import { Copy, Key, RefreshCw, Lock, Server } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { securityService } from '@/services/processing/securityService';
import { useAuth } from '@/contexts/auth/useAuth';

const APIKeyManager: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState<string>('');
  const [generating, setGenerating] = useState<boolean>(false);
  const [expiryDays, setExpiryDays] = useState<number>(30);

  const generateNewApiKey = async () => {
    if (!user?.id) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to generate an API key",
        variant: "destructive"
      });
      return;
    }

    setGenerating(true);
    try {
      const newKey = await securityService.generateAPIKey(user.id, expiryDays);
      setApiKey(newKey);
      toast({
        title: "API Key Generated",
        description: `Your new API key will expire in ${expiryDays} days`
      });
    } catch (error) {
      toast({
        title: "Error Generating Key",
        description: "There was a problem generating your API key",
        variant: "destructive"
      });
    } finally {
      setGenerating(false);
    }
  };

  const copyApiKey = () => {
    if (!apiKey) return;
    
    navigator.clipboard.writeText(apiKey);
    toast({
      title: "API Key Copied",
      description: "The API key has been copied to your clipboard"
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key size={18} />
          <span>API Key Manager</span>
        </CardTitle>
        <CardDescription>
          Generate and manage API keys for external integrations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="apiKey" className="text-sm font-medium">
              Your API Key
            </label>
            {apiKey && (
              <Button variant="ghost" size="sm" onClick={copyApiKey}>
                <Copy size={14} className="mr-1" />
                Copy
              </Button>
            )}
          </div>
          <div className="relative">
            <Input
              id="apiKey"
              type="text"
              value={apiKey || 'No API key generated yet'}
              readOnly
              className="pr-10 font-mono text-sm"
            />
            <Lock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {apiKey ? 'Keep this key secret. Do not share it publicly.' : 'Generate a key to access the secure APIs'}
          </p>
        </div>

        <div>
          <label htmlFor="expiry" className="text-sm font-medium block mb-2">
            Expiration Period
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[7, 30, 90].map((days) => (
              <Button
                key={days}
                type="button"
                variant={expiryDays === days ? 'default' : 'outline'}
                onClick={() => setExpiryDays(days)}
              >
                {days} days
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-xs flex items-center text-muted-foreground">
          <Server size={14} className="mr-1" />
          <span>Secure HTTPS endpoints</span>
        </div>
        <Button onClick={generateNewApiKey} disabled={generating}>
          {generating ? (
            <>
              <RefreshCw size={16} className="mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Key size={16} className="mr-2" />
              Generate New Key
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default APIKeyManager;
